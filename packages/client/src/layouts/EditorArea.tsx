import { useEditorStore } from '../stores/useEditorStore';
import { EditorTabs } from '../components/editor/EditorTabs';
import { MonacoEditor } from '../components/editor/MonacoEditor';
import { WelcomePage } from '../components/editor/WelcomePage';
import styles from './EditorArea.module.css';

export function EditorArea() {
  const activeTabId = useEditorStore((s) => s.activeTabId);

  return (
    <div className={styles.editorArea}>
      <EditorTabs />
      <div className={styles.content}>
        {activeTabId ? <MonacoEditor /> : <WelcomePage />}
      </div>
    </div>
  );
}
