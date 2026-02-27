import styles from './WelcomePage.module.css';

export function WelcomePage() {
  return (
    <div className={styles.welcome}>
      <h1 className={styles.title}>Data Dev IDE</h1>
      <p className={styles.subtitle}>A Web IDE for Data Development</p>
      <div className={styles.shortcuts}>
        <div className={styles.shortcutGroup}>
          <h3>Quick Actions</h3>
          <div className={styles.shortcut}>
            <kbd>Cmd+P</kbd>
            <span>Quick Open File</span>
          </div>
          <div className={styles.shortcut}>
            <kbd>Cmd+B</kbd>
            <span>Toggle Sidebar</span>
          </div>
          <div className={styles.shortcut}>
            <kbd>Cmd+J</kbd>
            <span>Toggle Bottom Panel</span>
          </div>
          <div className={styles.shortcut}>
            <kbd>Cmd+S</kbd>
            <span>Save File</span>
          </div>
          <div className={styles.shortcut}>
            <kbd>Shift+Alt+F</kbd>
            <span>Format Document</span>
          </div>
        </div>
      </div>
    </div>
  );
}
