import axios from 'axios';
import type {
  ApiResponse,
  FileNode,
  FileContent,
  SearchResult,
  SqlExecuteResult,
  DatabaseInfo,
  SchemaMetadata,
} from '@data-dev-ide/shared';

const api = axios.create({
  baseURL: '/api/v1',
  timeout: 10000,
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg = err.response?.data?.error || err.message;
    console.error('[api]', msg);
    return Promise.reject(new Error(msg));
  },
);

export const fileApi = {
  getTree: () => api.get<ApiResponse<FileNode[]>>('/files/tree').then((r) => r.data.data!),

  readFile: (path: string) =>
    api.get<ApiResponse<FileContent>>('/files/read', { params: { path } }).then((r) => r.data.data!),

  createFile: (path: string, type: 'file' | 'directory', content?: string) =>
    api.post('/files/create', { path, type, content }),

  updateFile: (path: string, content: string) => api.put('/files/update', { path, content }),

  renameFile: (oldPath: string, newPath: string) => api.put('/files/rename', { oldPath, newPath }),

  deleteFile: (path: string) => api.delete('/files/delete', { params: { path } }),

  searchFiles: (q: string) =>
    api.get<ApiResponse<SearchResult[]>>('/files/search', { params: { q } }).then((r) => r.data.data!),
};

export const sqlApi = {
  execute: (sql: string) =>
    api
      .post<ApiResponse<SqlExecuteResult>>('/sql/execute', { sql }, { timeout: 30000 })
      .then((r) => r.data.data!),

  getDatabases: () =>
    api.get<ApiResponse<DatabaseInfo[]>>('/sql/databases').then((r) => r.data.data!),

  createDatabase: (name: string) =>
    api.post<ApiResponse<DatabaseInfo>>('/sql/databases', { name }).then((r) => r.data.data!),

  setActiveDatabase: (name: string) => api.put('/sql/databases/active', { name }),

  deleteDatabase: (name: string) => api.delete(`/sql/databases/${name}`),

  getSchemas: (db?: string) =>
    api
      .get<ApiResponse<SchemaMetadata>>('/sql/schemas', { params: db ? { db } : {} })
      .then((r) => r.data.data!),
};
