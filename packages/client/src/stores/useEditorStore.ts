import { create } from 'zustand';
import type { TabState, ViewState } from '@data-dev-ide/shared';

interface EditorState {
  tabs: Map<string, TabState>;
  tabOrder: string[];
  activeTabId: string | null;
  viewStates: Map<string, ViewState>;

  openTab: (tab: TabState) => void;
  closeTab: (id: string) => string | null;
  switchTab: (id: string) => void;
  pinTab: (id: string) => void;
  setDirty: (id: string, dirty: boolean) => void;
  reorderTabs: (fromIndex: number, toIndex: number) => void;
  saveViewState: (id: string, viewState: ViewState) => void;
  getViewState: (id: string) => ViewState | undefined;
  updateTabPath: (oldPath: string, newPath: string, newName: string) => void;
  closeAllTabs: () => void;
}

function findTabIdByPath(tabs: Map<string, TabState>, filePath: string): string | undefined {
  for (const [id, tab] of tabs) {
    if (tab.filePath === filePath) return id;
  }
  return undefined;
}

export const useEditorStore = create<EditorState>()((set, get) => ({
  tabs: new Map(),
  tabOrder: [],
  activeTabId: null,
  viewStates: new Map(),

  openTab: (tab) => {
    const state = get();
    // Already open — switch to it
    const existing = findTabIdByPath(state.tabs, tab.filePath);
    if (existing) {
      // If clicking on a preview tab, pin it
      const existingTab = state.tabs.get(existing)!;
      if (existingTab.isPreview && !tab.isPreview) {
        const newTabs = new Map(state.tabs);
        newTabs.set(existing, { ...existingTab, isPreview: false, isPinned: true });
        set({ tabs: newTabs, activeTabId: existing });
      } else {
        set({ activeTabId: existing });
      }
      return;
    }

    // Replace existing preview tab
    if (tab.isPreview) {
      const previewId = state.tabOrder.find((id) => state.tabs.get(id)?.isPreview);
      if (previewId) {
        const newTabs = new Map(state.tabs);
        newTabs.delete(previewId);
        newTabs.set(tab.id, tab);
        const newOrder = state.tabOrder.map((id) => (id === previewId ? tab.id : id));
        set({ tabs: newTabs, tabOrder: newOrder, activeTabId: tab.id });
        return;
      }
    }

    const newTabs = new Map(state.tabs);
    newTabs.set(tab.id, tab);
    set({
      tabs: newTabs,
      tabOrder: [...state.tabOrder, tab.id],
      activeTabId: tab.id,
    });
  },

  closeTab: (id) => {
    const state = get();
    const newTabs = new Map(state.tabs);
    newTabs.delete(id);
    const newOrder = state.tabOrder.filter((t) => t !== id);

    let newActive = state.activeTabId;
    if (state.activeTabId === id) {
      const idx = state.tabOrder.indexOf(id);
      newActive = newOrder[Math.min(idx, newOrder.length - 1)] || null;
    }

    const newViewStates = new Map(state.viewStates);
    newViewStates.delete(id);

    set({
      tabs: newTabs,
      tabOrder: newOrder,
      activeTabId: newActive,
      viewStates: newViewStates,
    });
    return newActive;
  },

  switchTab: (id) => set({ activeTabId: id }),

  pinTab: (id) => {
    const state = get();
    const tab = state.tabs.get(id);
    if (!tab) return;
    const newTabs = new Map(state.tabs);
    newTabs.set(id, { ...tab, isPreview: false, isPinned: true });
    set({ tabs: newTabs });
  },

  setDirty: (id, dirty) => {
    const state = get();
    const tab = state.tabs.get(id);
    if (!tab) return;
    const newTabs = new Map(state.tabs);
    newTabs.set(id, { ...tab, isDirty: dirty });
    set({ tabs: newTabs });
  },

  reorderTabs: (fromIndex, toIndex) => {
    const newOrder = [...get().tabOrder];
    const [removed] = newOrder.splice(fromIndex, 1);
    newOrder.splice(toIndex, 0, removed);
    set({ tabOrder: newOrder });
  },

  saveViewState: (id, viewState) => {
    const newMap = new Map(get().viewStates);
    newMap.set(id, viewState);
    set({ viewStates: newMap });
  },

  getViewState: (id) => get().viewStates.get(id),

  updateTabPath: (oldPath, newPath, newName) => {
    const state = get();
    const tabId = findTabIdByPath(state.tabs, oldPath);
    if (!tabId) return;
    const tab = state.tabs.get(tabId)!;
    const newTabs = new Map(state.tabs);
    newTabs.set(tabId, { ...tab, filePath: newPath, fileName: newName });
    set({ tabs: newTabs });
  },

  closeAllTabs: () =>
    set({
      tabs: new Map(),
      tabOrder: [],
      activeTabId: null,
      viewStates: new Map(),
    }),
}));
