import { useLayoutStore } from '../../stores/useLayoutStore';
import type { BottomPanelTab } from '@data-dev-ide/shared';
import styles from './PanelTabBar.module.css';

const TABS: { id: BottomPanelTab; label: string }[] = [
  { id: 'result', label: 'Result' },
  { id: 'output', label: 'Output' },
];

export function PanelTabBar() {
  const activeBottomTab = useLayoutStore((s) => s.activeBottomTab);
  const setActiveBottomTab = useLayoutStore((s) => s.setActiveBottomTab);

  return (
    <div className={`${styles.tabBar} no-select`}>
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className={`${styles.tab} ${activeBottomTab === tab.id ? styles.active : ''}`}
          onClick={() => setActiveBottomTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
