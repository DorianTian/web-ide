import styles from './WorkbenchLayout.module.css';

export function WorkbenchLayout() {
  return (
    <div className={styles.workbench}>
      <div className={styles.activityBar}>Activity</div>
      <div className={styles.sidePanel}>Explorer</div>
      <div className={styles.mainArea}>
        <div className={styles.editorArea}>Editor</div>
        <div className={styles.bottomPanel}>Bottom Panel</div>
      </div>
      <div className={styles.statusBar}>Status Bar</div>
    </div>
  );
}
