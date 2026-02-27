import { useEffect, useState } from 'react';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { useDatabaseStore } from '../../stores/useDatabaseStore';
import { DatabaseTree } from './DatabaseTree';
import styles from './DatabaseExplorer.module.css';

export function DatabaseExplorer() {
  const fetchSchemas = useDatabaseStore((s) => s.fetchSchemas);
  const loading = useDatabaseStore((s) => s.loading);
  const createDatabase = useDatabaseStore((s) => s.createDatabase);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    fetchSchemas();
  }, [fetchSchemas]);

  const handleCreate = async () => {
    const name = newName.trim();
    if (!name) return;
    try {
      await createDatabase(name);
      setNewName('');
      setCreating(false);
    } catch (err) {
      console.error('[db] create failed', err);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCreate();
    if (e.key === 'Escape') {
      setCreating(false);
      setNewName('');
    }
  };

  return (
    <div className={styles.explorer}>
      <div className={styles.toolbar}>
        <button
          className={styles.toolBtn}
          title="New Database"
          onClick={() => setCreating(true)}
        >
          <PlusOutlined />
        </button>
        <button
          className={styles.toolBtn}
          title="Refresh"
          onClick={() => fetchSchemas()}
          disabled={loading}
        >
          <ReloadOutlined spin={loading} />
        </button>
      </div>

      {creating && (
        <div className={styles.createInput}>
          <input
            autoFocus
            className={styles.input}
            placeholder="database name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              if (!newName.trim()) setCreating(false);
            }}
          />
        </div>
      )}

      <div className={styles.treeWrap}>
        <DatabaseTree />
      </div>
    </div>
  );
}
