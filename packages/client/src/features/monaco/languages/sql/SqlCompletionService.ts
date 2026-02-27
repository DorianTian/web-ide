import { CharStream, CommonTokenStream, Token } from 'antlr4ng';
import { CodeCompletionCore } from 'antlr4-c3';
import { SQLiteLexer } from './antlr/SQLiteLexer';
import { SQLiteParser } from './antlr/SQLiteParser';
import type { TableInfo, ColumnInfo } from '@data-dev-ide/shared';

export interface CompletionContext {
  /** Current SQL text */
  sql: string;
  /** Cursor offset in the text (0-based) */
  cursorOffset: number;
}

export interface SchemaData {
  databases: string[];
  activeDb: string;
  tables: Record<string, TableInfo[]>;
  columns: Record<string, ColumnInfo[]>;
}

export interface CompletionCandidate {
  label: string;
  kind: 'database' | 'table' | 'column' | 'keyword' | 'function';
  detail?: string;
  sortPrefix: string;
  insertText?: string;
}

/**
 * Parse the SQL text, build a token stream, and determine the token index at the cursor position.
 */
function getTokenIndexAtOffset(
  tokens: CommonTokenStream,
  offset: number,
): number {
  tokens.fill();
  const allTokens = tokens.getTokens();
  let lastIndex = 0;
  for (let i = 0; i < allTokens.length; i++) {
    const t = allTokens[i];
    if (t.type === Token.EOF) break;
    if (t.start <= offset && offset <= t.stop + 1) {
      return i;
    }
    lastIndex = i;
  }
  return lastIndex;
}

/**
 * Extract table aliases from the SQL text using simple regex.
 * Returns a map: alias → table_name
 */
function extractAliases(sql: string): Map<string, string> {
  const aliasMap = new Map<string, string>();

  // Match: FROM table_name alias / FROM table_name AS alias
  // Match: JOIN table_name alias / JOIN table_name AS alias
  const pattern =
    /(?:FROM|JOIN)\s+(?:(?:"([^"]+)"|(\w+))\.)?(?:"([^"]+)"|(\w+))(?:\s+(?:AS\s+)?(?!"|\bON\b|\bWHERE\b|\bGROUP\b|\bORDER\b|\bLIMIT\b|\bHAVING\b|\bUNION\b|\bINNER\b|\bLEFT\b|\bRIGHT\b|\bFULL\b|\bCROSS\b|\bNATURAL\b|\bJOIN\b|\bSET\b|\bVALUES\b)(?:"([^"]+)"|(\w+)))?/gi;

  let match;
  while ((match = pattern.exec(sql)) !== null) {
    const tableName = match[3] || match[4] || '';
    const alias = match[5] || match[6] || '';
    if (alias && tableName) {
      aliasMap.set(alias.toLowerCase(), tableName);
    }
    // Also map table name to itself for unaliased references
    if (tableName && !alias) {
      aliasMap.set(tableName.toLowerCase(), tableName);
    }
  }

  return aliasMap;
}

/**
 * Determine what's immediately before the cursor when a dot is typed.
 * Returns the identifier before the dot.
 */
function getIdentifierBeforeDot(sql: string, cursorOffset: number): string | null {
  // Look backwards from cursor to find "identifier."
  const textBefore = sql.substring(0, cursorOffset);
  const match = textBefore.match(/(\w+)\.\s*$/);
  return match ? match[1] : null;
}

/**
 * Main completion function using ANTLR4 + c3.
 */
export function getCompletions(
  context: CompletionContext,
  schema: SchemaData,
): CompletionCandidate[] {
  const { sql, cursorOffset } = context;
  const candidates: CompletionCandidate[] = [];

  // 1. Check for dot-trigger first (most specific)
  const beforeDot = getIdentifierBeforeDot(sql, cursorOffset);
  if (beforeDot) {
    const lower = beforeDot.toLowerCase();

    // Check if it's a database name
    if (schema.databases.some((d) => d.toLowerCase() === lower)) {
      const dbTables = schema.tables[beforeDot] || schema.tables[lower] || [];
      for (const t of dbTables) {
        candidates.push({
          label: t.name,
          kind: 'table',
          detail: `${t.type} (${beforeDot})`,
          sortPrefix: '1',
        });
      }
      return candidates;
    }

    // Check if it's a table name or alias
    const aliases = extractAliases(sql);
    const resolvedTable = aliases.get(lower);
    const tableName = resolvedTable || beforeDot;

    // Look up columns in all databases
    for (const db of schema.databases) {
      const key = `${db}.${tableName}`;
      const cols = schema.columns[key];
      if (cols) {
        for (const col of cols) {
          candidates.push({
            label: col.name,
            kind: 'column',
            detail: `${col.type}${col.isPrimaryKey ? ' PK' : ''}`,
            sortPrefix: '1',
          });
        }
        return candidates;
      }
    }

    // Try case-insensitive match
    for (const [key, cols] of Object.entries(schema.columns)) {
      const tbl = key.split('.')[1];
      if (tbl?.toLowerCase() === tableName.toLowerCase()) {
        for (const col of cols) {
          candidates.push({
            label: col.name,
            kind: 'column',
            detail: `${col.type}${col.isPrimaryKey ? ' PK' : ''}`,
            sortPrefix: '1',
          });
        }
        return candidates;
      }
    }

    return candidates;
  }

  // 2. Use ANTLR4 + c3 for context-aware completion
  try {
    const inputStream = CharStream.fromString(sql);
    const lexer = new SQLiteLexer(inputStream);
    lexer.removeErrorListeners();
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SQLiteParser(tokenStream);
    parser.removeErrorListeners();

    // Parse (with error recovery)
    parser.parse();

    // Find token at cursor
    const caretTokenIndex = getTokenIndexAtOffset(tokenStream, cursorOffset);

    // c3 analysis
    const c3 = new CodeCompletionCore(parser);
    c3.preferredRules = new Set([
      SQLiteParser.RULE_table_name,
      SQLiteParser.RULE_column_name,
      SQLiteParser.RULE_schema_name,
    ]);

    // Ignore certain tokens from keyword suggestions
    c3.ignoredTokens = new Set([
      Token.EOF,
      SQLiteLexer.SCOL,
      SQLiteLexer.DOT,
      SQLiteLexer.OPEN_PAR,
      SQLiteLexer.CLOSE_PAR,
      SQLiteLexer.COMMA,
      SQLiteLexer.ASSIGN,
      SQLiteLexer.STAR,
      SQLiteLexer.PLUS,
      SQLiteLexer.MINUS,
      SQLiteLexer.TILDE,
      SQLiteLexer.PIPE2,
      SQLiteLexer.DIV,
      SQLiteLexer.MOD,
      SQLiteLexer.LT2,
      SQLiteLexer.GT2,
      SQLiteLexer.AMP,
      SQLiteLexer.PIPE,
      SQLiteLexer.LT,
      SQLiteLexer.LT_EQ,
      SQLiteLexer.GT,
      SQLiteLexer.GT_EQ,
      SQLiteLexer.EQ,
      SQLiteLexer.NOT_EQ1,
      SQLiteLexer.NOT_EQ2,
      SQLiteLexer.NUMERIC_LITERAL,
      SQLiteLexer.STRING_LITERAL,
      SQLiteLexer.BLOB_LITERAL,
      SQLiteLexer.BIND_PARAMETER,
      SQLiteLexer.IDENTIFIER,
      SQLiteLexer.UNEXPECTED_CHAR,
    ]);

    const completions = c3.collectCandidates(caretTokenIndex);

    // Process rule candidates
    if (completions.rules.has(SQLiteParser.RULE_table_name)) {
      const dbTables = schema.tables[schema.activeDb] || [];
      for (const t of dbTables) {
        candidates.push({
          label: t.name,
          kind: 'table',
          detail: `${t.type}`,
          sortPrefix: '1',
        });
      }
      // Also suggest tables from other databases with db prefix
      for (const db of schema.databases) {
        if (db === schema.activeDb) continue;
        const tables = schema.tables[db] || [];
        for (const t of tables) {
          candidates.push({
            label: `${db}.${t.name}`,
            kind: 'table',
            detail: `${t.type} (${db})`,
            sortPrefix: '2',
            insertText: `"${db}".${t.name}`,
          });
        }
      }
    }

    if (completions.rules.has(SQLiteParser.RULE_column_name)) {
      // Suggest columns from all referenced tables
      const aliases = extractAliases(sql);
      const suggestedColumns = new Set<string>();

      for (const [, tableName] of aliases) {
        for (const db of schema.databases) {
          const key = `${db}.${tableName}`;
          const cols = schema.columns[key];
          if (cols) {
            for (const col of cols) {
              if (!suggestedColumns.has(col.name)) {
                suggestedColumns.add(col.name);
                candidates.push({
                  label: col.name,
                  kind: 'column',
                  detail: `${col.type} (${tableName})`,
                  sortPrefix: '2',
                });
              }
            }
          }
        }
      }

      // If no specific tables found, suggest columns from active DB's tables
      if (suggestedColumns.size === 0) {
        const dbTables = schema.tables[schema.activeDb] || [];
        for (const t of dbTables) {
          const key = `${schema.activeDb}.${t.name}`;
          const cols = schema.columns[key] || [];
          for (const col of cols) {
            if (!suggestedColumns.has(col.name)) {
              suggestedColumns.add(col.name);
              candidates.push({
                label: col.name,
                kind: 'column',
                detail: `${col.type} (${t.name})`,
                sortPrefix: '2',
              });
            }
          }
        }
      }
    }

    if (completions.rules.has(SQLiteParser.RULE_schema_name)) {
      for (const db of schema.databases) {
        candidates.push({
          label: db,
          kind: 'database',
          detail: 'database',
          sortPrefix: '1',
        });
      }
    }

    // Process token candidates (keywords)
    for (const [tokenType] of completions.tokens) {
      const displayName = parser.vocabulary.getDisplayName(tokenType);
      if (displayName && !displayName.startsWith("'")) {
        // Token name like SELECT_, FROM_ etc
        const keyword = displayName.replace(/_$/, '').toUpperCase();
        if (keyword.length > 1) {
          candidates.push({
            label: keyword,
            kind: 'keyword',
            sortPrefix: '3',
          });
        }
      } else if (displayName) {
        // Literal token like 'SELECT'
        const keyword = displayName.replace(/'/g, '');
        if (keyword.length > 1 && /^[A-Z_]+$/i.test(keyword)) {
          candidates.push({
            label: keyword.toUpperCase(),
            kind: 'keyword',
            sortPrefix: '3',
          });
        }
      }
    }
  } catch {
    // If ANTLR parsing fails completely, fall back to default completions
  }

  // 3. Always add base completions if no specific candidates
  if (candidates.length === 0) {
    addDefaultCompletions(candidates, schema);
  }

  return candidates;
}

function addDefaultCompletions(
  candidates: CompletionCandidate[],
  schema: SchemaData,
): void {
  // Add tables from active DB
  const dbTables = schema.tables[schema.activeDb] || [];
  for (const t of dbTables) {
    candidates.push({
      label: t.name,
      kind: 'table',
      detail: t.type,
      sortPrefix: '1',
    });
  }

  // Add databases
  for (const db of schema.databases) {
    candidates.push({
      label: db,
      kind: 'database',
      detail: 'database',
      sortPrefix: '2',
    });
  }
}
