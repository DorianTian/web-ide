export interface LayoutState {
  sidePanel: PanelConfig;
  bottomPanel: PanelConfig;
  activityBarWidth: number;
  statusBarHeight: number;
}

export interface PanelConfig {
  visible: boolean;
  size: number;
  minSize: number;
  maxSize: number;
  defaultSize: number;
}

export type ActivityItem = 'explorer' | 'search' | 'git' | 'extensions' | 'settings' | 'database';

export type BottomPanelTab = 'result' | 'output';
