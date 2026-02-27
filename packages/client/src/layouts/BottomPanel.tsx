import { useLayoutStore } from '../stores/useLayoutStore';
import { PanelTabBar } from '../components/bottom-panel/PanelTabBar';
import { ResultPanel } from '../components/bottom-panel/ResultPanel';
import { OutputPanel } from '../components/bottom-panel/OutputPanel';
import styles from './BottomPanel.module.css';

export function BottomPanel() {
  const activeBottomTab = useLayoutStore((s) => s.activeBottomTab);

  return (
    <div className={styles.bottomPanel}>
      <PanelTabBar />
      <div className={styles.content}>
        {activeBottomTab === 'result' && <ResultPanel />}
        {activeBottomTab === 'output' && <OutputPanel />}
      </div>
    </div>
  );
}
