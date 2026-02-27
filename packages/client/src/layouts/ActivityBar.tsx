import {
  FileOutlined,
  SearchOutlined,
  BranchesOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useLayoutStore } from '../stores/useLayoutStore';
import type { ActivityItem } from '@data-dev-ide/shared';
import styles from './ActivityBar.module.css';

const ITEMS: { id: ActivityItem; icon: React.ReactNode; title: string }[] = [
  { id: 'explorer', icon: <FileOutlined />, title: 'Explorer' },
  { id: 'search', icon: <SearchOutlined />, title: 'Search' },
  { id: 'git', icon: <BranchesOutlined />, title: 'Source Control' },
  { id: 'extensions', icon: <AppstoreOutlined />, title: 'Extensions' },
];

export function ActivityBar() {
  const activeActivity = useLayoutStore((s) => s.activeActivity);
  const setActiveActivity = useLayoutStore((s) => s.setActiveActivity);
  const sidePanelVisible = useLayoutStore((s) => s.sidePanelVisible);

  return (
    <div className={`${styles.activityBar} no-select`}>
      <div className={styles.top}>
        {ITEMS.map((item) => (
          <button
            key={item.id}
            className={`${styles.item} ${
              activeActivity === item.id && sidePanelVisible ? styles.active : ''
            }`}
            title={item.title}
            onClick={() => setActiveActivity(item.id)}
          >
            {item.icon}
          </button>
        ))}
      </div>
      <div className={styles.bottom}>
        <button
          className={styles.item}
          title="Settings"
          onClick={() => setActiveActivity('settings')}
        >
          <SettingOutlined />
        </button>
      </div>
    </div>
  );
}
