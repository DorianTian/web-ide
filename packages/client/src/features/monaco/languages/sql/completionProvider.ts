import * as monaco from 'monaco-editor';

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
  'DEFAULT', 'AUTO_INCREMENT', 'COMMENT', 'ENGINE', 'CHARSET',
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
  { name: 'NOW', detail: 'NOW()' },
  { name: 'CURRENT_TIMESTAMP', detail: 'CURRENT_TIMESTAMP' },
  { name: 'DATE_FORMAT', detail: 'DATE_FORMAT(date, format)' },
  { name: 'DATEDIFF', detail: 'DATEDIFF(date1, date2)' },
  { name: 'IFNULL', detail: 'IFNULL(expr1, expr2)' },
  { name: 'ROUND', detail: 'ROUND(number, decimals)' },
  { name: 'FLOOR', detail: 'FLOOR(number)' },
  { name: 'CEIL', detail: 'CEIL(number)' },
  { name: 'ABS', detail: 'ABS(number)' },
  { name: 'ROW_NUMBER', detail: 'ROW_NUMBER() OVER (...)' },
  { name: 'RANK', detail: 'RANK() OVER (...)' },
  { name: 'DENSE_RANK', detail: 'DENSE_RANK() OVER (...)' },
  { name: 'LAG', detail: 'LAG(expr, offset, default) OVER (...)' },
  { name: 'LEAD', detail: 'LEAD(expr, offset, default) OVER (...)' },
  { name: 'GROUP_CONCAT', detail: 'GROUP_CONCAT(expr SEPARATOR str)' },
];

const SQL_TYPES = [
  'INT', 'INTEGER', 'BIGINT', 'SMALLINT', 'TINYINT',
  'FLOAT', 'DOUBLE', 'DECIMAL', 'NUMERIC',
  'CHAR', 'VARCHAR', 'TEXT',
  'DATE', 'TIME', 'DATETIME', 'TIMESTAMP',
  'BOOLEAN', 'JSON', 'BLOB',
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
      'CREATE TABLE IF NOT EXISTS ${1:table_name} (\n\t${2:id} BIGINT PRIMARY KEY AUTO_INCREMENT,\n\t${3:name} VARCHAR(64) NOT NULL,\n\tcreated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n)',
    detail: 'CREATE TABLE statement',
  },
  {
    label: 'WITH CTE',
    insertText:
      'WITH ${1:cte_name} AS (\n\tSELECT ${2:*}\n\tFROM ${3:table_name}\n)\nSELECT * FROM ${1:cte_name}',
    detail: 'Common Table Expression',
  },
];

export function registerSqlCompletionProvider(): monaco.IDisposable {
  return monaco.languages.registerCompletionItemProvider('sql', {
    provideCompletionItems(model, position) {
      const word = model.getWordUntilPosition(position);
      const range: monaco.IRange = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn,
      };

      const suggestions: monaco.languages.CompletionItem[] = [];

      // Keywords
      for (const kw of SQL_KEYWORDS) {
        suggestions.push({
          label: kw,
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: kw,
          range,
          sortText: '1' + kw,
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
          sortText: '2' + fn.name,
        });
      }

      // Types
      for (const t of SQL_TYPES) {
        suggestions.push({
          label: t,
          kind: monaco.languages.CompletionItemKind.TypeParameter,
          insertText: t,
          range,
          sortText: '3' + t,
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
