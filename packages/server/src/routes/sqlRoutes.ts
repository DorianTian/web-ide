import { Router } from 'express';
import { sqlController } from '../controllers/sqlController';

export const sqlRoutes = Router();

sqlRoutes.post('/execute', sqlController.execute);
sqlRoutes.get('/databases', sqlController.getDatabases);
sqlRoutes.post('/databases', sqlController.createDatabase);
sqlRoutes.put('/databases/active', sqlController.setActiveDatabase);
sqlRoutes.delete('/databases/:name', sqlController.deleteDatabase);
sqlRoutes.get('/schemas', sqlController.getSchemas);
