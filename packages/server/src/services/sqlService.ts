import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DB_DIR = path.resolve(process.cwd(), 'workspace/.data');
const DB_PATH = path.join(DB_DIR, 'ide.db');
const MAX_ROWS = 5000;

let db: Database.Database;

function getDb(): Database.Database {
  if (!db) {
    fs.mkdirSync(DB_DIR, { recursive: true });
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    db.pragma('busy_timeout = 3000');
    initDemoData();
  }
  return db;
}

function initDemoData(): void {
  const tableExists = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='users'")
    .get();

  if (tableExists) return;

  db.exec(`
    CREATE TABLE users (
      user_id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      status INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE orders (
      order_id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      amount REAL NOT NULL,
      status TEXT DEFAULT 'pending',
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );

    INSERT INTO users (username, email, status, created_at) VALUES
      ('alice',   'alice@example.com',   1, '2024-01-05 10:00:00'),
      ('bob',     'bob@example.com',     1, '2024-01-12 14:30:00'),
      ('charlie', 'charlie@example.com', 1, '2024-02-01 09:15:00'),
      ('diana',   'diana@example.com',   1, '2024-02-18 16:45:00'),
      ('eve',     'eve@example.com',     0, '2024-03-03 11:20:00'),
      ('frank',   'frank@example.com',   1, '2024-03-20 08:00:00'),
      ('grace',   'grace@example.com',   1, '2024-04-10 13:30:00'),
      ('henry',   'henry@example.com',   1, '2024-05-05 17:00:00'),
      ('ivy',     'ivy@example.com',     1, '2024-06-15 10:45:00'),
      ('jack',    'jack@example.com',    0, '2024-07-22 15:10:00');

    INSERT INTO orders (user_id, amount, status, created_at) VALUES
      (1, 120.50, 'completed', '2024-02-01 10:00:00'),
      (1, 89.00,  'completed', '2024-02-15 14:00:00'),
      (1, 230.00, 'completed', '2024-03-01 09:00:00'),
      (1, 45.80,  'completed', '2024-03-20 11:00:00'),
      (1, 560.00, 'completed', '2024-04-10 16:00:00'),
      (1, 78.50,  'completed', '2024-05-05 08:30:00'),
      (1, 340.00, 'completed', '2024-05-22 13:00:00'),
      (1, 95.20,  'shipped',   '2024-06-10 10:00:00'),
      (1, 180.00, 'shipped',   '2024-06-25 15:30:00'),
      (1, 420.00, 'pending',   '2024-07-01 09:00:00'),
      (1, 67.00,  'pending',   '2024-07-15 14:00:00'),
      (1, 290.00, 'pending',   '2024-07-28 11:30:00'),
      (2, 150.00, 'completed', '2024-02-10 10:00:00'),
      (2, 320.00, 'completed', '2024-03-05 14:00:00'),
      (2, 88.50,  'completed', '2024-04-12 09:00:00'),
      (2, 445.00, 'completed', '2024-05-01 16:00:00'),
      (2, 72.00,  'shipped',   '2024-05-20 11:00:00'),
      (2, 210.00, 'shipped',   '2024-06-08 13:30:00'),
      (2, 135.00, 'pending',   '2024-06-30 08:00:00'),
      (2, 560.00, 'pending',   '2024-07-18 15:00:00'),
      (3, 680.00, 'completed', '2024-01-20 10:00:00'),
      (3, 95.00,  'completed', '2024-02-14 14:00:00'),
      (3, 420.00, 'completed', '2024-03-08 09:00:00'),
      (3, 150.00, 'completed', '2024-03-25 16:00:00'),
      (3, 830.00, 'completed', '2024-04-15 11:00:00'),
      (3, 270.00, 'completed', '2024-05-02 13:30:00'),
      (3, 195.00, 'completed', '2024-05-18 08:00:00'),
      (3, 540.00, 'completed', '2024-06-05 15:00:00'),
      (3, 110.00, 'completed', '2024-06-22 10:00:00'),
      (3, 360.00, 'shipped',   '2024-07-03 14:00:00'),
      (3, 88.00,  'shipped',   '2024-07-12 09:00:00'),
      (3, 720.00, 'shipped',   '2024-07-20 16:00:00'),
      (3, 165.00, 'pending',   '2024-07-25 11:00:00'),
      (3, 430.00, 'pending',   '2024-07-30 13:30:00'),
      (3, 95.00,  'pending',   '2024-08-01 08:00:00'),
      (4, 310.00, 'completed', '2024-03-01 10:00:00'),
      (4, 88.50,  'completed', '2024-03-18 14:00:00'),
      (4, 540.00, 'completed', '2024-04-05 09:00:00'),
      (4, 175.00, 'completed', '2024-04-22 16:00:00'),
      (4, 290.00, 'shipped',   '2024-05-10 11:00:00'),
      (4, 430.00, 'pending',   '2024-06-01 13:30:00'),
      (6, 220.00, 'completed', '2024-04-01 10:00:00'),
      (6, 680.00, 'completed', '2024-05-15 14:00:00'),
      (6, 95.00,  'completed', '2024-06-10 09:00:00'),
      (6, 340.00, 'shipped',   '2024-07-01 16:00:00'),
      (7, 150.00, 'completed', '2024-05-01 10:00:00'),
      (7, 420.00, 'completed', '2024-06-15 14:00:00'),
      (7, 88.00,  'shipped',   '2024-07-10 09:00:00'),
      (8, 560.00, 'completed', '2024-06-01 10:00:00'),
      (8, 130.00, 'shipped',   '2024-07-15 14:00:00'),
      (9, 340.00, 'completed', '2024-07-01 10:00:00'),
      (9, 210.00, 'pending',   '2024-07-25 14:00:00');
  `);

  console.log('[sql] demo data initialized (users: 10, orders: 52)');
}

function isSelectQuery(sql: string): boolean {
  const trimmed = sql.trim().toUpperCase();
  return (
    trimmed.startsWith('SELECT') ||
    trimmed.startsWith('WITH') ||
    trimmed.startsWith('PRAGMA') ||
    trimmed.startsWith('EXPLAIN')
  );
}

export interface ExecuteResult {
  columns: string[];
  rows: Record<string, unknown>[];
  rowCount: number;
  duration: number;
  type: 'query' | 'statement';
  message?: string;
}

export const sqlService = {
  execute(sql: string): ExecuteResult {
    const database = getDb();
    const start = performance.now();

    if (isSelectQuery(sql)) {
      const stmt = database.prepare(sql);
      const rows = stmt.all() as Record<string, unknown>[];
      const duration = Math.round((performance.now() - start) * 100) / 100;
      const columns = rows.length > 0 ? Object.keys(rows[0]) : [];
      const limited = rows.slice(0, MAX_ROWS);

      return {
        columns,
        rows: limited,
        rowCount: rows.length,
        duration,
        type: 'query',
        message: rows.length > MAX_ROWS ? `Showing ${MAX_ROWS} of ${rows.length} rows` : undefined,
      };
    }

    // Check if it contains multiple statements (semicolons not at end)
    const hasMultipleStatements =
      sql.replace(/;[\s]*$/, '').includes(';');

    if (hasMultipleStatements) {
      database.exec(sql);
      const duration = Math.round((performance.now() - start) * 100) / 100;
      return {
        columns: [],
        rows: [],
        rowCount: 0,
        duration,
        type: 'statement',
        message: 'Statements executed successfully.',
      };
    }

    const stmt = database.prepare(sql);
    const result = stmt.run();
    const duration = Math.round((performance.now() - start) * 100) / 100;

    return {
      columns: [],
      rows: [],
      rowCount: result.changes,
      duration,
      type: 'statement',
      message: `Statement executed successfully. ${result.changes} row(s) affected.`,
    };
  },
};
