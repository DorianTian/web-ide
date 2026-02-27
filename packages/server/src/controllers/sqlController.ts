import type { Request, Response, NextFunction } from 'express';
import { sqlService } from '../services/sqlService';
import { AppError } from '../middleware/errorHandler';

function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
}

export const sqlController = {
  execute: asyncHandler(async (req, res) => {
    const { sql } = req.body;
    if (!sql || typeof sql !== 'string') {
      throw new AppError(400, 'sql is required');
    }

    const trimmed = sql.trim();
    if (!trimmed) {
      throw new AppError(400, 'sql cannot be empty');
    }

    try {
      const result = sqlService.execute(trimmed);
      res.json({ success: true, data: result });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'SQL execution failed';
      throw new AppError(400, message);
    }
  }),

  getDatabases: asyncHandler(async (_req, res) => {
    const databases = sqlService.getDatabases();
    res.json({ success: true, data: databases });
  }),

  createDatabase: asyncHandler(async (req, res) => {
    const { name } = req.body;
    if (!name || typeof name !== 'string') {
      throw new AppError(400, 'name is required');
    }
    if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name)) {
      throw new AppError(400, 'Invalid database name. Use letters, digits, and underscores.');
    }
    try {
      const db = sqlService.createDatabase(name);
      res.json({ success: true, data: db });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to create database';
      throw new AppError(400, message);
    }
  }),

  setActiveDatabase: asyncHandler(async (req, res) => {
    const { name } = req.body;
    if (!name || typeof name !== 'string') {
      throw new AppError(400, 'name is required');
    }
    try {
      sqlService.setActiveDatabase(name);
      res.json({ success: true, message: `Active database set to "${name}"` });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to set active database';
      throw new AppError(400, message);
    }
  }),

  deleteDatabase: asyncHandler(async (req, res) => {
    const { name } = req.params;
    if (!name) {
      throw new AppError(400, 'name is required');
    }
    try {
      sqlService.deleteDatabase(name);
      res.json({ success: true, message: `Database "${name}" deleted` });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to delete database';
      throw new AppError(400, message);
    }
  }),

  getSchemas: asyncHandler(async (req, res) => {
    const db = req.query.db as string | undefined;
    const schemas = sqlService.getSchemas(db);
    res.json({ success: true, data: schemas });
  }),
};
