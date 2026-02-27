import { useMemo } from 'react';
import { Table, Spin } from 'antd';
import { useEditorStore } from '../../stores/useEditorStore';
import styles from './ResultPanel.module.css';

export function ResultPanel() {
  const sqlResult = useEditorStore((s) => s.sqlResult);
  const sqlLoading = useEditorStore((s) => s.sqlLoading);
  const sqlError = useEditorStore((s) => s.sqlError);

  const columns = useMemo(() => {
    if (!sqlResult?.columns.length) return [];
    return sqlResult.columns.map((col) => ({
      title: col,
      dataIndex: col,
      key: col,
      ellipsis: true,
      render: (value: unknown) => {
        if (value === null) return <span className={styles.null}>NULL</span>;
        return String(value);
      },
    }));
  }, [sqlResult?.columns]);

  const dataSource = useMemo(() => {
    if (!sqlResult?.rows.length) return [];
    return sqlResult.rows.map((row, i) => ({ ...row, key: i }));
  }, [sqlResult?.rows]);

  if (sqlLoading) {
    return (
      <div className={styles.panel}>
        <div className={styles.center}>
          <Spin size="small" />
          <span className={styles.statusText}>Executing...</span>
        </div>
      </div>
    );
  }

  if (sqlError) {
    return (
      <div className={styles.panel}>
        <div className={styles.center}>
          <span className={styles.error}>{sqlError}</span>
        </div>
      </div>
    );
  }

  if (!sqlResult) {
    return (
      <div className={styles.panel}>
        <div className={styles.center}>
          <span className={styles.hint}>Press ⌘+Enter to execute SQL</span>
        </div>
      </div>
    );
  }

  if (sqlResult.type === 'statement' && sqlResult.columns.length === 0) {
    return (
      <div className={styles.panel}>
        <div className={styles.toolbar}>
          <span className={styles.info}>{sqlResult.duration}ms</span>
        </div>
        <div className={styles.center}>
          <span className={styles.success}>{sqlResult.message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.panel}>
      <div className={styles.toolbar}>
        <span className={styles.info}>
          {sqlResult.rowCount} row{sqlResult.rowCount !== 1 ? 's' : ''}
        </span>
        <span className={styles.info}>{sqlResult.duration}ms</span>
        {sqlResult.message && <span className={styles.info}>{sqlResult.message}</span>}
      </div>
      <div className={styles.tableWrap}>
        <Table
          columns={columns}
          dataSource={dataSource}
          size="small"
          pagination={false}
          scroll={{ x: true, y: 'calc(100% - 39px)' }}
          className={styles.table}
        />
      </div>
    </div>
  );
}
