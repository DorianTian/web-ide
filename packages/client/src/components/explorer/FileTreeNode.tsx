import { useCallback, useState, useRef, useEffect } from 'react';
import type { FileNode } from '@data-dev-ide/shared';
import { useFileStore } from '../../stores/useFileStore';
import { useEditorStore } from '../../stores/useEditorStore';
import { useContextMenu } from '../../hooks/useContextMenu';
import { fileApi } from '../../services/api';
import { FileIcon } from '../common/Icon';
import { RightOutlined, DownOutlined } from '@ant-design/icons';
import styles from './FileTreeNode.module.css';

const LANGUAGE_MAP: Record<string, string> = {
  ts: 'typescript', tsx: 'typescript', js: 'javascript', jsx: 'javascript',
  json: 'json', md: 'markdown', sql: 'sql', py: 'python', css: 'css',
  html: 'html', xml: 'xml', yaml: 'yaml', yml: 'yaml', sh: 'shell',
  go: 'go', rs: 'rust', java: 'java',
};

function getLanguage(fileName: string): string {
  const ext = fileName.split('.').pop()?.toLowerCase() || '';
  return LANGUAGE_MAP[ext] || 'plaintext';
}

interface FileTreeNodeProps {
  node: FileNode;
  depth: number;
  onRefresh: () => void;
}

export function FileTreeNode({ node, depth, onRefresh }: FileTreeNodeProps) {
  const expandedPaths = useFileStore((s) => s.expandedPaths);
  const toggleExpand = useFileStore((s) => s.toggleExpand);
  const selectedPath = useFileStore((s) => s.selectedPath);
  const setSelectedPath = useFileStore((s) => s.setSelectedPath);
  const openTab = useEditorStore((s) => s.openTab);
  const { onContextMenu } = useContextMenu();

  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState('');
  const renameInputRef = useRef<HTMLInputElement>(null);

  const isExpanded = expandedPaths.has(node.path);
  const isSelected = selectedPath === node.path;
  const isDir = node.type === 'directory';

  useEffect(() => {
    if (isRenaming && renameInputRef.current) {
      renameInputRef.current.focus();
      const dotIdx = renameValue.lastIndexOf('.');
      if (dotIdx > 0) {
        renameInputRef.current.setSelectionRange(0, dotIdx);
      } else {
        renameInputRef.current.select();
      }
    }
  }, [isRenaming, renameValue]);

  const handleClick = useCallback(() => {
    setSelectedPath(node.path);
    if (isDir) {
      toggleExpand(node.path);
    } else {
      // Single click — preview tab
      openTab({
        id: node.path,
        filePath: node.path,
        fileName: node.name,
        language: getLanguage(node.name),
        isDirty: false,
        isPinned: false,
        isPreview: true,
      });
    }
  }, [node, isDir, setSelectedPath, toggleExpand, openTab]);

  const handleDoubleClick = useCallback(() => {
    if (!isDir) {
      openTab({
        id: node.path,
        filePath: node.path,
        fileName: node.name,
        language: getLanguage(node.name),
        isDirty: false,
        isPinned: true,
        isPreview: false,
      });
    }
  }, [node, isDir, openTab]);

  const handleRename = useCallback(async () => {
    if (!renameValue || renameValue === node.name) {
      setIsRenaming(false);
      return;
    }
    const parentPath = node.path.includes('/') ? node.path.substring(0, node.path.lastIndexOf('/')) : '';
    const newPath = parentPath ? `${parentPath}/${renameValue}` : renameValue;
    try {
      await fileApi.renameFile(node.path, newPath);
      onRefresh();
    } catch {
      // ignore
    }
    setIsRenaming(false);
  }, [renameValue, node, onRefresh]);

  const handleDelete = useCallback(async () => {
    const typeLabel = isDir ? 'folder' : 'file';
    if (!window.confirm(`Delete ${typeLabel} "${node.name}"?`)) return;
    try {
      await fileApi.deleteFile(node.path);
      onRefresh();
    } catch {
      // ignore
    }
  }, [node, isDir, onRefresh]);

  const handleNewFile = useCallback(async () => {
    const name = window.prompt('Enter file name:');
    if (!name) return;
    const path = isDir ? `${node.path}/${name}` : name;
    await fileApi.createFile(path, 'file', '');
    onRefresh();
  }, [node, isDir, onRefresh]);

  const handleNewFolder = useCallback(async () => {
    const name = window.prompt('Enter folder name:');
    if (!name) return;
    const path = isDir ? `${node.path}/${name}` : name;
    await fileApi.createFile(path, 'directory');
    onRefresh();
  }, [node, isDir, onRefresh]);

  const contextMenuItems = [
    ...(isDir
      ? [
          { label: 'New File', onClick: handleNewFile },
          { label: 'New Folder', onClick: handleNewFolder },
          { label: '', separator: true },
        ]
      : []),
    {
      label: 'Rename',
      shortcut: 'F2',
      onClick: () => {
        setRenameValue(node.name);
        setIsRenaming(true);
      },
    },
    { label: 'Delete', onClick: handleDelete },
    { label: '', separator: true },
    {
      label: 'Copy Path',
      onClick: () => navigator.clipboard.writeText(node.path),
    },
  ];

  const handleDragStart = useCallback(
    (e: React.DragEvent) => {
      e.dataTransfer.setData('text/plain', node.path);
      e.dataTransfer.effectAllowed = 'move';
    },
    [node.path],
  );

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isDir) return;
      const sourcePath = e.dataTransfer.getData('text/plain');
      if (!sourcePath || sourcePath === node.path) return;
      const name = sourcePath.split('/').pop()!;
      const newPath = `${node.path}/${name}`;
      try {
        await fileApi.renameFile(sourcePath, newPath);
        onRefresh();
      } catch {
        // ignore
      }
    },
    [node.path, isDir, onRefresh],
  );

  const handleDragOver = useCallback(
    (e: React.DragEvent) => {
      if (isDir) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      }
    },
    [isDir],
  );

  return (
    <>
      <div
        className={`${styles.node} ${isSelected ? styles.selected : ''}`}
        style={{ paddingLeft: depth * 16 + 8 }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onContextMenu={(e) => onContextMenu(e, contextMenuItems)}
        draggable
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {isDir && (
          <span className={styles.arrow}>
            {isExpanded ? <DownOutlined /> : <RightOutlined />}
          </span>
        )}
        {!isDir && <span className={styles.arrow} />}
        <span className={styles.icon}>
          <FileIcon name={node.name} isDirectory={isDir} isExpanded={isExpanded} />
        </span>
        {isRenaming ? (
          <input
            ref={renameInputRef}
            className={styles.renameInput}
            value={renameValue}
            onChange={(e) => setRenameValue(e.target.value)}
            onBlur={handleRename}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleRename();
              if (e.key === 'Escape') setIsRenaming(false);
            }}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span className={styles.name}>{node.name}</span>
        )}
      </div>
      {isDir &&
        isExpanded &&
        node.children?.map((child) => (
          <FileTreeNode
            key={child.path}
            node={child}
            depth={depth + 1}
            onRefresh={onRefresh}
          />
        ))}
    </>
  );
}
