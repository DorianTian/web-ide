import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ActivityItem, BottomPanelTab } from '@data-dev-ide/shared';

interface LayoutState {
  sidePanelVisible: boolean;
  sidePanelWidth: number;
  bottomPanelVisible: boolean;
  bottomPanelHeight: number;
  activeActivity: ActivityItem;
  activeBottomTab: BottomPanelTab;

  toggleSidePanel: () => void;
  setSidePanelWidth: (width: number) => void;
  toggleBottomPanel: () => void;
  setBottomPanelHeight: (height: number) => void;
  setActiveActivity: (item: ActivityItem) => void;
  setActiveBottomTab: (tab: BottomPanelTab) => void;
}

export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      sidePanelVisible: true,
      sidePanelWidth: 260,
      bottomPanelVisible: true,
      bottomPanelHeight: 200,
      activeActivity: 'explorer',
      activeBottomTab: 'result',

      toggleSidePanel: () => set((s) => ({ sidePanelVisible: !s.sidePanelVisible })),
      setSidePanelWidth: (width) => set({ sidePanelWidth: width }),
      toggleBottomPanel: () => set((s) => ({ bottomPanelVisible: !s.bottomPanelVisible })),
      setBottomPanelHeight: (height) => set({ bottomPanelHeight: height }),
      setActiveActivity: (item) =>
        set((s) => {
          if (s.activeActivity === item && s.sidePanelVisible) {
            return { sidePanelVisible: false };
          }
          return { activeActivity: item, sidePanelVisible: true };
        }),
      setActiveBottomTab: (tab) => set({ activeBottomTab: tab, bottomPanelVisible: true }),
    }),
    { name: 'data-ide-layout' },
  ),
);
