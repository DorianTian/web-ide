import { useRef, useCallback, useState } from 'react';
import { useEditorStore } from '../../stores/useEditorStore';
import { CloseOutlined } from '@ant-design/icons';
import { FileIcon } from '../common/Icon';
import styles from './EditorTabs.module.css';

export function EditorTabs() {
  const tabOrder = useEditorStore((s) => s.tabOrder);
  const tabs = useEditorStore((s) => s.tabs);
  const activeTabId = useEditorStore((s) => s.activeTabId);
  const switchTab = useEditorStore((s) => s.switchTab);
  const closeTab = useEditorStore((s) => s.closeTab);
  const pinTab = useEditorStore((s) => s.pinTab);
  const reorderTabs = useEditorStore((s) => s.reorderTabs);

  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(
    (e: React.MouseEvent, id: string) => {
      e.stopPropagation();
      const tab = tabs.get(id);
      if (tab?.isDirty) {
        if (!window.confirm(`"${tab.fileName}" has unsaved changes. Close anyway?`)) return;
      }
      closeTab(id);
    },
    [tabs, closeTab],
  );

  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    e.dataTransfer.effectAllowed = 'move';
    setDragIndex(index);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent, toIndex: number) => {
      e.preventDefault();
      if (dragIndex !== null && dragIndex !== toIndex) {
        reorderTabs(dragIndex, toIndex);
      }
      setDragIndex(null);
      setDragOverIndex(null);
    },
    [dragIndex, reorderTabs],
  );

  const handleDragEnd = useCallback(() => {
    setDragIndex(null);
    setDragOverIndex(null);
  }, []);

  if (tabOrder.length === 0) return null;

  return (
    <div className={styles.tabBar} ref={scrollRef}>
      {tabOrder.map((id, index) => {
        const tab = tabs.get(id);
        if (!tab) return null;

        const isActive = id === activeTabId;
        const isDragOver = dragOverIndex === index && dragIndex !== index;

        return (
          <div
            key={id}
            className={`${styles.tab} ${isActive ? styles.active : ''} ${
              tab.isPreview ? styles.preview : ''
            } ${isDragOver ? styles.dragOver : ''}`}
            onClick={() => switchTab(id)}
            onDoubleClick={() => pinTab(id)}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
          >
            <span className={styles.icon}>
              <FileIcon name={tab.fileName} isDirectory={false} />
            </span>
            <span className={styles.name}>{tab.fileName}</span>
            {tab.isDirty && <span className={styles.dirty} />}
            <button
              className={styles.close}
              onClick={(e) => handleClose(e, id)}
              title="Close"
            >
              <CloseOutlined style={{ fontSize: 10 }} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
