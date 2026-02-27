import { Router } from 'express';

export const healthRoutes = Router();

healthRoutes.get('/', (_req, res) => {
  res.json({ success: true, data: { status: 'ok', uptime: process.uptime() } });
});
