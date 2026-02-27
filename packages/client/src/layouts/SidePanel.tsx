import { useLayoutStore } from '../stores/useLayoutStore';
import { FileExplorer } from '../components/explorer/FileExplorer';
import { DatabaseExplorer } from '../components/database/DatabaseExplorer';
import styles from './SidePanel.module.css';

export function SidePanel() {
  const activeActivity = useLayoutStore((s) => s.activeActivity);

  return (
    <div className={styles.sidePanel}>
      <div className={styles.header}>
        <span className={styles.title}>
          {activeActivity === 'explorer' && 'EXPLORER'}
          {activeActivity === 'database' && 'DATABASE EXPLORER'}
          {activeActivity === 'search' && 'SEARCH'}
          {activeActivity === 'git' && 'SOURCE CONTROL'}
          {activeActivity === 'extensions' && 'EXTENSIONS'}
          {activeActivity === 'settings' && 'SETTINGS'}
        </span>
      </div>
      <div className={styles.content}>
        {activeActivity === 'explorer' && <FileExplorer />}
        {activeActivity === 'database' && <DatabaseExplorer />}
        {activeActivity === 'search' && (
          <div className={styles.placeholder}>Search (coming soon)</div>
        )}
        {activeActivity === 'git' && (
          <div className={styles.placeholder}>Source Control (coming soon)</div>
        )}
        {activeActivity === 'extensions' && (
          <div className={styles.placeholder}>Extensions (coming soon)</div>
        )}
        {activeActivity === 'settings' && (
          <div className={styles.placeholder}>Settings (coming soon)</div>
        )}
      </div>
    </div>
  );
}
