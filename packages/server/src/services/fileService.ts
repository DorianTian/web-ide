import fs from 'fs/promises';
import path from 'path';
import type { FileNode, FileContent, SearchResult } from '@data-dev-ide/shared';
import { AppError } from '../middleware/errorHandler';

const WORKSPACE_ROOT = path.resolve(process.cwd(), 'workspace');

function safePath(userPath: string): string {
  const resolved = path.resolve(WORKSPACE_ROOT, userPath);
  if (!resolved.startsWith(WORKSPACE_ROOT)) {
    throw new AppError(403, 'Path traversal denied');
  }
  return resolved;
}

function getExtension(fileName: string): string {
  const ext = path.extname(fileName).slice(1);
  return ext;
}

async function buildTree(dirPath: string, relativeTo: string): Promise<FileNode[]> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const nodes: FileNode[] = [];

  const sorted = entries
    .filter((e) => !e.name.startsWith('.'))
    .sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

  for (const entry of sorted) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = path.relative(relativeTo, fullPath);

    if (entry.isDirectory()) {
      const children = await buildTree(fullPath, relativeTo);
      nodes.push({
        name: entry.name,
        path: relPath,
        type: 'directory',
        children,
      });
    } else {
      const stat = await fs.stat(fullPath);
      nodes.push({
        name: entry.name,
        path: relPath,
        type: 'file',
        size: stat.size,
        modifiedAt: stat.mtime.toISOString(),
        extension: getExtension(entry.name),
      });
    }
  }

  return nodes;
}

const LANGUAGE_MAP: Record<string, string> = {
  ts: 'typescript',
  tsx: 'typescript',
  js: 'javascript',
  jsx: 'javascript',
  json: 'json',
  md: 'markdown',
  sql: 'sql',
  py: 'python',
  css: 'css',
  html: 'html',
  xml: 'xml',
  yaml: 'yaml',
  yml: 'yaml',
  sh: 'shell',
  go: 'go',
  rs: 'rust',
  java: 'java',
};

function detectLanguage(filePath: string): string {
  const ext = getExtension(filePath);
  return LANGUAGE_MAP[ext] || 'plaintext';
}

async function collectFiles(
  dirPath: string,
  relativeTo: string,
  results: SearchResult[],
  query: string,
): Promise<void> {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
    const fullPath = path.join(dirPath, entry.name);
    const relPath = path.relative(relativeTo, fullPath);
    const lower = entry.name.toLowerCase();
    const q = query.toLowerCase();

    if (lower.includes(q)) {
      results.push({
        path: relPath,
        name: entry.name,
        type: entry.isDirectory() ? 'directory' : 'file',
      });
    }

    if (entry.isDirectory()) {
      await collectFiles(fullPath, relativeTo, results, query);
    }
  }
}

export const fileService = {
  async getTree(): Promise<FileNode[]> {
    await fs.mkdir(WORKSPACE_ROOT, { recursive: true });
    return buildTree(WORKSPACE_ROOT, WORKSPACE_ROOT);
  },

  async readFile(filePath: string): Promise<FileContent> {
    if (!filePath) throw new AppError(400, 'path is required');
    const abs = safePath(filePath);
    const content = await fs.readFile(abs, 'utf-8');
    return {
      path: filePath,
      content,
      language: detectLanguage(filePath),
      encoding: 'utf-8',
    };
  },

  async createFile(filePath: string, type: 'file' | 'directory', content?: string): Promise<void> {
    if (!filePath) throw new AppError(400, 'path is required');
    const abs = safePath(filePath);
    if (type === 'directory') {
      await fs.mkdir(abs, { recursive: true });
    } else {
      await fs.mkdir(path.dirname(abs), { recursive: true });
      await fs.writeFile(abs, content || '', 'utf-8');
    }
  },

  async updateFile(filePath: string, content: string): Promise<void> {
    if (!filePath) throw new AppError(400, 'path is required');
    const abs = safePath(filePath);
    await fs.writeFile(abs, content, 'utf-8');
  },

  async renameFile(oldPath: string, newPath: string): Promise<void> {
    if (!oldPath || !newPath) throw new AppError(400, 'oldPath and newPath are required');
    const absOld = safePath(oldPath);
    const absNew = safePath(newPath);
    await fs.mkdir(path.dirname(absNew), { recursive: true });
    await fs.rename(absOld, absNew);
  },

  async deleteFile(filePath: string): Promise<void> {
    if (!filePath) throw new AppError(400, 'path is required');
    const abs = safePath(filePath);
    const stat = await fs.stat(abs);
    if (stat.isDirectory()) {
      await fs.rm(abs, { recursive: true });
    } else {
      await fs.unlink(abs);
    }
  },

  async searchFiles(query: string): Promise<SearchResult[]> {
    if (!query) return [];
    const results: SearchResult[] = [];
    await collectFiles(WORKSPACE_ROOT, WORKSPACE_ROOT, results, query);
    return results.slice(0, 50);
  },
};
