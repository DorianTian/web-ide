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
};
