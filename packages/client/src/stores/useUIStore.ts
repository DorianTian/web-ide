import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { EditorTheme } from '@data-dev-ide/shared';

interface UIState {
  theme: EditorTheme;
  contextMenu: ContextMenuState | null;
  quickOpen: boolean;

  setTheme: (theme: EditorTheme) => void;
  toggleTheme: () => void;
  showContextMenu: (state: ContextMenuState) => void;
  hideContextMenu: () => void;
  setQuickOpen: (open: boolean) => void;
}

export interface ContextMenuState {
  x: number;
  y: number;
  items: ContextMenuItem[];
}

export interface ContextMenuItem {
  label: string;
  shortcut?: string;
  disabled?: boolean;
  separator?: boolean;
  onClick?: () => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: 'data-ide-dark',
      contextMenu: null,
      quickOpen: false,

      setTheme: (theme) => set({ theme }),
      toggleTheme: () =>
        set((s) => ({
          theme: s.theme === 'data-ide-dark' ? 'data-ide-light' : 'data-ide-dark',
        })),
      showContextMenu: (state) => set({ contextMenu: state }),
      hideContextMenu: () => set({ contextMenu: null }),
      setQuickOpen: (open) => set({ quickOpen: open }),
    }),
    {
      name: 'data-ide-ui',
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
