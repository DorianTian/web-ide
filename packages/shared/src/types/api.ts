export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface WsMessage {
  type: WsMessageType;
  payload: unknown;
}

export type WsMessageType =
  | 'file:created'
  | 'file:changed'
  | 'file:deleted'
  | 'file:renamed'
  | 'connection:established'
  | 'error';

export interface FileChangeEvent {
  type: 'add' | 'change' | 'unlink' | 'addDir' | 'unlinkDir';
  path: string;
}

export interface SqlExecuteRequest {
  sql: string;
}

export interface SqlExecuteResult {
  columns: string[];
  rows: Record<string, unknown>[];
  rowCount: number;
  duration: number;
  type: 'query' | 'statement';
  message?: string;
}
