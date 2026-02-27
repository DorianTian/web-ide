import * as monaco from 'monaco-editor';
import { getCompletions, type SchemaData } from '@data-dev-ide/sql-parser';
import { useDatabaseStore } from '../../../../stores/useDatabaseStore';

const SQL_KEYWORDS = [
  'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'NOT', 'IN', 'IS', 'NULL',
  'AS', 'ON', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 'FULL', 'CROSS',
  'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE',
  'CREATE', 'ALTER', 'DROP', 'TABLE', 'INDEX', 'VIEW', 'DATABASE',
  'IF', 'EXISTS', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES',
  'GROUP', 'BY', 'ORDER', 'ASC', 'DESC', 'HAVING', 'LIMIT', 'OFFSET',
  'UNION', 'ALL', 'DISTINCT', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END',
  'LIKE', 'BETWEEN', 'WITH', 'OVER', 'PARTITION',
  'GRANT', 'REVOKE', 'COMMIT', 'ROLLBACK', 'BEGIN', 'TRANSACTION',
  'EXPLAIN', 'ANALYZE', 'TRUNCATE',
  'DEFAULT', 'AUTOINCREMENT',
  'UNIQUE', 'CHECK', 'CONSTRAINT', 'CASCADE',
];

const SQL_FUNCTIONS = [
  { name: 'COUNT', detail: 'COUNT(expr)' },
  { name: 'SUM', detail: 'SUM(expr)' },
  { name: 'AVG', detail: 'AVG(expr)' },
  { name: 'MIN', detail: 'MIN(expr)' },
  { name: 'MAX', detail: 'MAX(expr)' },
  { name: 'CONCAT', detail: 'CONCAT(str1, str2, ...)' },
  { name: 'SUBSTRING', detail: 'SUBSTRING(str, pos, len)' },
  { name: 'TRIM', detail: 'TRIM(str)' },
  { name: 'UPPER', detail: 'UPPER(str)' },
  { name: 'LOWER', detail: 'LOWER(str)' },
  { name: 'LENGTH', detail: 'LENGTH(str)' },
  { name: 'REPLACE', detail: 'REPLACE(str, from, to)' },
  { name: 'COALESCE', detail: 'COALESCE(expr1, expr2, ...)' },
  { name: 'NULLIF', detail: 'NULLIF(expr1, expr2)' },
  { name: 'CAST', detail: 'CAST(expr AS type)' },
  { name: 'DATETIME', detail: "DATETIME('now')" },
  { name: 'DATE', detail: "DATE('now')" },
  { name: 'IFNULL', detail: 'IFNULL(expr1, expr2)' },
  { name: 'ROUND', detail: 'ROUND(number, decimals)' },
  { name: 'ABS', detail: 'ABS(number)' },
  { name: 'ROW_NUMBER', detail: 'ROW_NUMBER() OVER (...)' },
  { name: 'RANK', detail: 'RANK() OVER (...)' },
  { name: 'DENSE_RANK', detail: 'DENSE_RANK() OVER (...)' },
  { name: 'LAG', detail: 'LAG(expr, offset, default) OVER (...)' },
  { name: 'LEAD', detail: 'LEAD(expr, offset, default) OVER (...)' },
  { name: 'GROUP_CONCAT', detail: 'GROUP_CONCAT(expr, separator)' },
  { name: 'TYPEOF', detail: 'TYPEOF(expr)' },
  { name: 'TOTAL', detail: 'TOTAL(expr)' },
  { name: 'INSTR', detail: 'INSTR(str, substr)' },
  { name: 'SUBSTR', detail: 'SUBSTR(str, start, length)' },
];

const SQL_TYPES = [
  'INTEGER', 'REAL', 'TEXT', 'BLOB', 'NUMERIC',
  'INT', 'BIGINT', 'SMALLINT',
  'FLOAT', 'DOUBLE', 'DECIMAL',
  'CHAR', 'VARCHAR',
  'DATE', 'DATETIME', 'TIMESTAMP',
  'BOOLEAN',
];

const SNIPPETS = [
  {
    label: 'SELECT ... FROM',
    insertText: 'SELECT ${1:*}\nFROM ${2:table_name}\nWHERE ${3:1=1}',
    detail: 'Basic SELECT statement',
  },
  {
    label: 'SELECT ... JOIN',
    insertText:
      'SELECT ${1:*}\nFROM ${2:table1} t1\nLEFT JOIN ${3:table2} t2 ON t1.${4:id} = t2.${5:id}\nWHERE ${6:1=1}',
    detail: 'SELECT with JOIN',
  },
  {
    label: 'INSERT INTO',
    insertText: 'INSERT INTO ${1:table_name} (${2:columns})\nVALUES (${3:values})',
    detail: 'INSERT statement',
  },
  {
    label: 'CREATE TABLE',
    insertText:
      'CREATE TABLE IF NOT EXISTS ${1:table_name} (\n\t${2:id} INTEGER PRIMARY KEY AUTOINCREMENT,\n\t${3:name} TEXT NOT NULL,\n\tcreated_at TEXT DEFAULT (datetime(\'now\'))\n)',
    detail: 'CREATE TABLE statement (SQLite)',
  },
  {
    label: 'WITH CTE',
    insertText:
      'WITH ${1:cte_name} AS (\n\tSELECT ${2:*}\n\tFROM ${3:table_name}\n)\nSELECT * FROM ${1:cte_name}',
    detail: 'Common Table Expression',
  },
];

const KIND_MAP: Record<string, monaco.languages.CompletionItemKind> = {
  database: monaco.languages.CompletionItemKind.Module,
  table: monaco.languages.CompletionItemKind.Struct,
  column: monaco.languages.CompletionItemKind.Field,
  keyword: monaco.languages.CompletionItemKind.Keyword,
  function: monaco.languages.CompletionItemKind.Function,
};

function getSchemaData(): SchemaData {
  const state = useDatabaseStore.getState();
  return {
    databases: state.databases.map((d) => d.name),
    activeDb: state.activeDb,
    tables: state.tables,
    columns: state.columns,
  };
}

export function registerSqlCompletionProvider(): monaco.IDisposable {
  return monaco.languages.registerCompletionItemProvider('sql', {
    triggerCharacters: ['.'],

    provideCompletionItems(model, position) {
      const word = model.getWordUntilPosition(position);
      const suggestions: monaco.languages.CompletionItem[] = [];

      // Get full SQL text and cursor offset
      const sql = model.getValue();
      const cursorOffset = model.getOffsetAt(position);

      // Check if this is a dot-trigger
      const textBeforeCursor = model.getValueInRange({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      });
      const isDotTrigger = textBeforeCursor.endsWith('.');

      const range: monaco.IRange = isDotTrigger
        ? {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: position.column,
            endColumn: position.column,
          }
        : {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
          };

      // Schema-aware completions via ANTLR + c3
      const schema = getSchemaData();
      const hasSchema = schema.databases.length > 0;

      if (hasSchema) {
        const antlrCandidates = getCompletions(
          { sql, cursorOffset },
          schema,
        );

        if (antlrCandidates.length > 0) {
          for (const c of antlrCandidates) {
            suggestions.push({
              label: c.label,
              kind: KIND_MAP[c.kind] || monaco.languages.CompletionItemKind.Text,
              insertText: c.insertText || c.label,
              detail: c.detail,
              range,
              sortText: c.sortPrefix + c.label,
            });
          }

          // For dot-trigger, only return schema completions
          if (isDotTrigger) {
            return { suggestions };
          }
        }
      }

      // Static keywords
      for (const kw of SQL_KEYWORDS) {
        suggestions.push({
          label: kw,
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: kw,
          range,
          sortText: '3' + kw,
        });
      }

      // Functions
      for (const fn of SQL_FUNCTIONS) {
        suggestions.push({
          label: fn.name,
          kind: monaco.languages.CompletionItemKind.Function,
          insertText: fn.name + '($0)',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: fn.detail,
          range,
          sortText: '4' + fn.name,
        });
      }

      // Types
      for (const t of SQL_TYPES) {
        suggestions.push({
          label: t,
          kind: monaco.languages.CompletionItemKind.TypeParameter,
          insertText: t,
          range,
          sortText: '5' + t,
        });
      }

      // Snippets
      for (const s of SNIPPETS) {
        suggestions.push({
          label: s.label,
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: s.insertText,
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          detail: s.detail,
          range,
          sortText: '0' + s.label,
        });
      }

      return { suggestions };
    },
  });
}
