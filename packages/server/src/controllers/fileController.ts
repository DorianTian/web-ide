import type { Request, Response, NextFunction } from 'express';
import { fileService } from '../services/fileService';

function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
}

export const fileController = {
  getTree: asyncHandler(async (_req, res) => {
    const tree = await fileService.getTree();
    res.json({ success: true, data: tree });
  }),

  readFile: asyncHandler(async (req, res) => {
    const filePath = req.query.path as string;
    const content = await fileService.readFile(filePath);
    res.json({ success: true, data: content });
  }),

  createFile: asyncHandler(async (req, res) => {
    const { path, type, content } = req.body;
    await fileService.createFile(path, type, content);
    res.json({ success: true, message: `${type} created` });
  }),

  updateFile: asyncHandler(async (req, res) => {
    const { path, content } = req.body;
    await fileService.updateFile(path, content);
    res.json({ success: true, message: 'File saved' });
  }),

  renameFile: asyncHandler(async (req, res) => {
    const { oldPath, newPath } = req.body;
    await fileService.renameFile(oldPath, newPath);
    res.json({ success: true, message: 'Renamed' });
  }),

  deleteFile: asyncHandler(async (req, res) => {
    const filePath = req.query.path as string;
    await fileService.deleteFile(filePath);
    res.json({ success: true, message: 'Deleted' });
  }),

  searchFiles: asyncHandler(async (req, res) => {
    const query = req.query.q as string;
    const results = await fileService.searchFiles(query);
    res.json({ success: true, data: results });
  }),
};
