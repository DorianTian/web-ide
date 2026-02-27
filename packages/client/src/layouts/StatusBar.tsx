import { useEditorStore } from '../stores/useEditorStore';
import { useUIStore } from '../stores/useUIStore';
import styles from './StatusBar.module.css';

export function StatusBar() {
  const activeTabId = useEditorStore((s) => s.activeTabId);
  const tabs = useEditorStore((s) => s.tabs);
  const viewStates = useEditorStore((s) => s.viewStates);
  const theme = useUIStore((s) => s.theme);
  const toggleTheme = useUIStore((s) => s.toggleTheme);

  const activeTab = activeTabId ? tabs.get(activeTabId) : null;
  const viewState = activeTabId ? viewStates.get(activeTabId) : null;

  const line = viewState?.cursorPosition.lineNumber ?? 1;
  const column = viewState?.cursorPosition.column ?? 1;

  return (
    <div className={`${styles.statusBar} no-select`}>
      <div className={styles.left}>
        <span className={styles.item}>Data Dev IDE</span>
      </div>
      <div className={styles.right}>
        {activeTab && (
          <>
            <span className={styles.item}>
              Ln {line}, Col {column}
            </span>
            <span className={styles.item}>UTF-8</span>
            <span className={styles.item}>{activeTab.language.toUpperCase()}</span>
          </>
        )}
        <button className={styles.item} onClick={toggleTheme}>
          {theme === 'data-ide-dark' ? 'Dark' : 'Light'}
        </button>
      </div>
    </div>
  );
}
