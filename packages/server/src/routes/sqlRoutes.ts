import { Router } from 'express';
import { sqlController } from '../controllers/sqlController';

export const sqlRoutes = Router();

sqlRoutes.post('/execute', sqlController.execute);
