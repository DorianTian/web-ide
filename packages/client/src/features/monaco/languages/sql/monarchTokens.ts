import type * as monaco from 'monaco-editor';

export const sqlLanguageDef: monaco.languages.IMonarchLanguage = {
  defaultToken: '',
  tokenPostfix: '.sql',
  ignoreCase: true,

  keywords: [
    'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'NOT', 'IN', 'IS', 'NULL',
    'AS', 'ON', 'JOIN', 'LEFT', 'RIGHT', 'INNER', 'OUTER', 'FULL', 'CROSS',
    'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE',
    'CREATE', 'ALTER', 'DROP', 'TABLE', 'INDEX', 'VIEW', 'DATABASE', 'SCHEMA',
    'IF', 'EXISTS', 'NOT', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES',
    'GROUP', 'BY', 'ORDER', 'ASC', 'DESC', 'HAVING', 'LIMIT', 'OFFSET',
    'UNION', 'ALL', 'DISTINCT', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END',
    'LIKE', 'BETWEEN', 'WITH', 'RECURSIVE', 'OVER', 'PARTITION',
    'ROW_NUMBER', 'RANK', 'DENSE_RANK', 'NTILE', 'LAG', 'LEAD',
    'FIRST_VALUE', 'LAST_VALUE', 'NTH_VALUE',
    'GRANT', 'REVOKE', 'COMMIT', 'ROLLBACK', 'SAVEPOINT', 'BEGIN', 'TRANSACTION',
    'EXPLAIN', 'ANALYZE', 'TRUNCATE', 'REPLACE', 'MERGE', 'USING', 'MATCHED',
    'WINDOW', 'ROWS', 'RANGE', 'UNBOUNDED', 'PRECEDING', 'FOLLOWING', 'CURRENT', 'ROW',
    'DEFAULT', 'AUTO_INCREMENT', 'COMMENT', 'ENGINE', 'CHARSET',
    'UNIQUE', 'CHECK', 'CONSTRAINT', 'CASCADE', 'RESTRICT',
    'TRUE', 'FALSE',
  ],

  typeKeywords: [
    'INT', 'INTEGER', 'BIGINT', 'SMALLINT', 'TINYINT', 'MEDIUMINT',
    'FLOAT', 'DOUBLE', 'DECIMAL', 'NUMERIC', 'REAL',
    'CHAR', 'VARCHAR', 'TEXT', 'TINYTEXT', 'MEDIUMTEXT', 'LONGTEXT',
    'BLOB', 'TINYBLOB', 'MEDIUMBLOB', 'LONGBLOB',
    'DATE', 'TIME', 'DATETIME', 'TIMESTAMP', 'YEAR',
    'BOOLEAN', 'BOOL', 'BIT',
    'JSON', 'ENUM', 'SET',
    'BINARY', 'VARBINARY',
    'ARRAY', 'MAP', 'STRUCT', 'STRING',
  ],

  builtinFunctions: [
    'COUNT', 'SUM', 'AVG', 'MIN', 'MAX',
    'CONCAT', 'SUBSTRING', 'TRIM', 'UPPER', 'LOWER', 'LENGTH', 'REPLACE',
    'COALESCE', 'NULLIF', 'CAST', 'CONVERT',
    'NOW', 'CURRENT_TIMESTAMP', 'CURRENT_DATE', 'DATE_FORMAT', 'DATEDIFF',
    'DATE_ADD', 'DATE_SUB', 'YEAR', 'MONTH', 'DAY', 'HOUR', 'MINUTE', 'SECOND',
    'IF', 'IFNULL', 'IIF',
    'ABS', 'CEIL', 'CEILING', 'FLOOR', 'ROUND', 'MOD', 'POWER', 'SQRT',
    'GROUP_CONCAT', 'STRING_AGG', 'LISTAGG',
    'ROW_NUMBER', 'RANK', 'DENSE_RANK',
    'REGEXP', 'REGEXP_REPLACE', 'REGEXP_EXTRACT',
    'SPLIT', 'EXPLODE', 'COLLECT_LIST', 'COLLECT_SET',
    'TO_DATE', 'TO_TIMESTAMP', 'FROM_UNIXTIME', 'UNIX_TIMESTAMP',
    'HASH', 'MD5', 'SHA1', 'SHA2',
    'GET_JSON_OBJECT', 'JSON_EXTRACT', 'JSON_VALUE',
  ],

  operators: [
    '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
    '<>', '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|',
    '^', '%', '<<', '>>', '>>>', '+=', '-=', '*=', '/=',
  ],

  brackets: [
    { open: '[', close: ']', token: 'delimiter.square' },
    { open: '(', close: ')', token: 'delimiter.parenthesis' },
  ],

  tokenizer: {
    root: [
      { include: '@comments' },
      { include: '@whitespace' },
      { include: '@numbers' },
      { include: '@strings' },
      [/[;,.]/, 'delimiter'],
      [/[()]/, '@brackets'],
      [
        /[\w@#$]+/,
        {
          cases: {
            '@keywords': 'keyword',
            '@typeKeywords': 'type',
            '@builtinFunctions': 'predefined',
            '@default': 'identifier',
          },
        },
      ],
      [/[<>=!%&+\-*/|~^]/, 'operator'],
    ],
    whitespace: [[/\s+/, 'white']],
    comments: [
      [/--+.*/, 'comment'],
      [/\/\*/, { token: 'comment.quote', next: '@comment' }],
    ],
    comment: [
      [/[^*/]+/, 'comment'],
      [/\*\//, { token: 'comment.quote', next: '@pop' }],
      [/./, 'comment'],
    ],
    strings: [
      [/'/, { token: 'string', next: '@string_single' }],
      [/"/, { token: 'string', next: '@string_double' }],
      [/`/, { token: 'string', next: '@string_backtick' }],
    ],
    string_single: [
      [/[^']+/, 'string'],
      [/''/, 'string'],
      [/'/, { token: 'string', next: '@pop' }],
    ],
    string_double: [
      [/[^"]+/, 'string'],
      [/""/, 'string'],
      [/"/, { token: 'string', next: '@pop' }],
    ],
    string_backtick: [
      [/[^`]+/, 'string'],
      [/``/, 'string'],
      [/`/, { token: 'string', next: '@pop' }],
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]*/, 'number'],
      [/[$][+-]*\d*(\.\d*)?/, 'number'],
      [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, 'number'],
    ],
  },
};
