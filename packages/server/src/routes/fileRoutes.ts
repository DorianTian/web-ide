import { Router } from 'express';
import { fileController } from '../controllers/fileController';

export const fileRoutes = Router();

fileRoutes.get('/tree', fileController.getTree);
fileRoutes.get('/read', fileController.readFile);
fileRoutes.post('/create', fileController.createFile);
fileRoutes.put('/update', fileController.updateFile);
fileRoutes.put('/rename', fileController.renameFile);
fileRoutes.delete('/delete', fileController.deleteFile);
fileRoutes.get('/search', fileController.searchFiles);
