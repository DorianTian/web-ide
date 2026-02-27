import { useEffect, useMemo } from 'react';
import { useLayoutStore } from '../stores/useLayoutStore';
import { useUIStore } from '../stores/useUIStore';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcut';
import { ActivityBar } from './ActivityBar';
import { SidePanel } from './SidePanel';
import { EditorArea } from './EditorArea';
import { BottomPanel } from './BottomPanel';
import { StatusBar } from './StatusBar';
import { PanelResizer } from './PanelResizer';
import { ContextMenu } from '../components/common/ContextMenu';
import '../styles/themes/dark.css';
import '../styles/themes/light.css';
import styles from './WorkbenchLayout.module.css';

export function WorkbenchLayout() {
  const sidePanelVisible = useLayoutStore((s) => s.sidePanelVisible);
  const sidePanelWidth = useLayoutStore((s) => s.sidePanelWidth);
  const setSidePanelWidth = useLayoutStore((s) => s.setSidePanelWidth);
  const bottomPanelVisible = useLayoutStore((s) => s.bottomPanelVisible);
  const bottomPanelHeight = useLayoutStore((s) => s.bottomPanelHeight);
  const setBottomPanelHeight = useLayoutStore((s) => s.setBottomPanelHeight);
  const toggleSidePanel = useLayoutStore((s) => s.toggleSidePanel);
  const toggleBottomPanel = useLayoutStore((s) => s.toggleBottomPanel);
  const theme = useUIStore((s) => s.theme);
  const setQuickOpen = useUIStore((s) => s.setQuickOpen);

  // Sync theme to DOM
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'data-ide-dark' ? 'dark' : 'light',
    );
  }, [theme]);

  // Global keyboard shortcuts
  const shortcuts = useMemo(
    () => [
      { key: 'b', metaKey: true, handler: toggleSidePanel },
      { key: 'j', metaKey: true, handler: toggleBottomPanel },
      { key: 'p', metaKey: true, handler: () => setQuickOpen(true) },
    ],
    [toggleSidePanel, toggleBottomPanel, setQuickOpen],
  );
  useKeyboardShortcuts(shortcuts);

  const gridColumns = sidePanelVisible
    ? `var(--activity-bar-width) ${sidePanelWidth}px 1fr`
    : `var(--activity-bar-width) 0px 1fr`;

  return (
    <div className={styles.workbench} style={{ gridTemplateColumns: gridColumns }}>
      <div className={styles.activityBar}>
        <ActivityBar />
      </div>

      {sidePanelVisible && (
        <>
          <div className={styles.sidePanel}>
            <SidePanel />
          </div>
          <PanelResizer
            direction="horizontal"
            size={sidePanelWidth}
            minSize={170}
            maxSize={500}
            defaultSize={260}
            onResize={setSidePanelWidth}
          />
        </>
      )}
      {!sidePanelVisible && <div className={styles.sidePanelHidden} />}

      <div className={styles.mainArea}>
        <EditorArea />
        {bottomPanelVisible && (
          <>
            <PanelResizer
              direction="vertical"
              size={bottomPanelHeight}
              minSize={100}
              maxSize={600}
              defaultSize={200}
              onResize={setBottomPanelHeight}
              reverse
            />
            <div className={styles.bottomPanel} style={{ height: bottomPanelHeight }}>
              <BottomPanel />
            </div>
          </>
        )}
      </div>

      <div className={styles.statusBar}>
        <StatusBar />
      </div>

      <ContextMenu />
    </div>
  );
}
