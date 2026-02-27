import { create } from 'zustand';
import type { FileNode } from '@data-dev-ide/shared';

interface FileState {
  tree: FileNode[];
  expandedPaths: Set<string>;
  selectedPath: string | null;
  loading: boolean;
  error: string | null;

  setTree: (tree: FileNode[]) => void;
  toggleExpand: (path: string) => void;
  setExpanded: (path: string, expanded: boolean) => void;
  setSelectedPath: (path: string | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useFileStore = create<FileState>()((set) => ({
  tree: [],
  expandedPaths: new Set<string>(),
  selectedPath: null,
  loading: false,
  error: null,

  setTree: (tree) => set({ tree, loading: false, error: null }),
  toggleExpand: (path) =>
    set((s) => {
      const next = new Set(s.expandedPaths);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return { expandedPaths: next };
    }),
  setExpanded: (path, expanded) =>
    set((s) => {
      const next = new Set(s.expandedPaths);
      if (expanded) next.add(path);
      else next.delete(path);
      return { expandedPaths: next };
    }),
  setSelectedPath: (path) => set({ selectedPath: path }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
