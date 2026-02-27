export interface TabState {
  id: string;
  filePath: string;
  fileName: string;
  language: string;
  isDirty: boolean;
  isPinned: boolean;
  isPreview: boolean;
}

export interface ViewState {
  scrollTop: number;
  scrollLeft: number;
  cursorPosition: CursorPosition;
  selections: Selection[];
}

export interface CursorPosition {
  lineNumber: number;
  column: number;
}

export interface Selection {
  startLineNumber: number;
  startColumn: number;
  endLineNumber: number;
  endColumn: number;
}

export type EditorTheme = 'data-ide-dark' | 'data-ide-light';
