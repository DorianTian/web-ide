import { useEffect, useCallback, useState } from 'react';
import { useFileStore } from '../../stores/useFileStore';
import { fileApi } from '../../services/api';
import { wsService } from '../../services/wsService';
import { FileTreeNode } from './FileTreeNode';
import { FileSearchBar } from './FileSearchBar';
import { PlusOutlined, FolderAddOutlined, ReloadOutlined } from '@ant-design/icons';
import styles from './FileExplorer.module.css';

export function FileExplorer() {
  const tree = useFileStore((s) => s.tree);
  const setTree = useFileStore((s) => s.setTree);
  const setLoading = useFileStore((s) => s.setLoading);
  const loading = useFileStore((s) => s.loading);
  const [filter, setFilter] = useState('');

  const loadTree = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fileApi.getTree();
      setTree(data);
    } catch {
      setTree([]);
    }
  }, [setTree, setLoading]);

  useEffect(() => {
    loadTree();
  }, [loadTree]);

  // WebSocket file change listener
  useEffect(() => {
    wsService.connect();
    const unsub = wsService.subscribe((msg) => {
      if (
        msg.type === 'file:created' ||
        msg.type === 'file:deleted' ||
        msg.type === 'file:renamed'
      ) {
        loadTree();
      }
    });
    return () => {
      unsub();
    };
  }, [loadTree]);

  const handleNewFile = useCallback(async () => {
    const name = window.prompt('Enter file name:');
    if (!name) return;
    await fileApi.createFile(name, 'file', '');
    loadTree();
  }, [loadTree]);

  const handleNewFolder = useCallback(async () => {
    const name = window.prompt('Enter folder name:');
    if (!name) return;
    await fileApi.createFile(name, 'directory');
    loadTree();
  }, [loadTree]);

  const filterTree = useCallback(
    (nodes: typeof tree): typeof tree => {
      if (!filter) return nodes;
      return nodes.reduce<typeof tree>((acc, node) => {
        if (node.type === 'file') {
          if (node.name.toLowerCase().includes(filter.toLowerCase())) {
            acc.push(node);
          }
        } else {
          const filtered = filterTree(node.children || []);
          if (filtered.length > 0) {
            acc.push({ ...node, children: filtered });
          }
        }
        return acc;
      }, []);
    },
    [filter],
  );

  const displayTree = filterTree(tree);

  return (
    <div className={styles.explorer}>
      <div className={styles.toolbar}>
        <FileSearchBar value={filter} onChange={setFilter} />
        <div className={styles.actions}>
          <button className={styles.action} onClick={handleNewFile} title="New File">
            <PlusOutlined />
          </button>
          <button className={styles.action} onClick={handleNewFolder} title="New Folder">
            <FolderAddOutlined />
          </button>
          <button className={styles.action} onClick={loadTree} title="Refresh">
            <ReloadOutlined />
          </button>
        </div>
      </div>
      <div className={styles.tree}>
        {loading && tree.length === 0 ? (
          <div className={styles.loading}>Loading...</div>
        ) : displayTree.length === 0 ? (
          <div className={styles.empty}>No files found</div>
        ) : (
          displayTree.map((node) => (
            <FileTreeNode key={node.path} node={node} depth={0} onRefresh={loadTree} />
          ))
        )}
      </div>
    </div>
  );
}
