export interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'directory';
  children?: FileNode[];
  size?: number;
  modifiedAt?: string;
  extension?: string;
}

export interface FileContent {
  path: string;
  content: string;
  language?: string;
  encoding?: string;
}

export interface CreateFileRequest {
  path: string;
  type: 'file' | 'directory';
  content?: string;
}

export interface RenameRequest {
  oldPath: string;
  newPath: string;
}

export interface SearchResult {
  path: string;
  name: string;
  type: 'file' | 'directory';
  matches?: SearchMatch[];
}

export interface SearchMatch {
  line: number;
  column: number;
  text: string;
}
