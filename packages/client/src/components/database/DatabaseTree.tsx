import { useState } from 'react';
import {
  DatabaseOutlined,
  TableOutlined,
  KeyOutlined,
  FieldStringOutlined,
  DownOutlined,
  RightOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { monaco } from '../../features/monaco/setup';
import { useDatabaseStore } from '../../stores/useDatabaseStore';
import { useEditorStore } from '../../stores/useEditorStore';
import type { DatabaseInfo, TableInfo, ColumnInfo } from '@data-dev-ide/shared';
import styles from './DatabaseTree.module.css';

export function DatabaseTree() {
  const databases = useDatabaseStore((s) => s.databases);
  const tables = useDatabaseStore((s) => s.tables);
  const columns = useDatabaseStore((s) => s.columns);

  if (databases.length === 0) {
    return <div className={styles.empty}>No databases</div>;
  }

  return (
    <div className={styles.tree}>
      {databases.map((db) => (
        <DatabaseNode
          key={db.name}
          db={db}
          tables={tables[db.name] || []}
          columns={columns}
        />
      ))}
    </div>
  );
}

function DatabaseNode({
  db,
  tables,
  columns,
}: {
  db: DatabaseInfo;
  tables: TableInfo[];
  columns: Record<string, ColumnInfo[]>;
}) {
  const [expanded, setExpanded] = useState(db.isActive);
  const setActiveDb = useDatabaseStore((s) => s.setActiveDb);
  const deleteDatabase = useDatabaseStore((s) => s.deleteDatabase);

  return (
    <div className={styles.node}>
      <div
        className={`${styles.row} ${db.isActive ? styles.active : ''}`}
        onClick={() => setExpanded(!expanded)}
        onDoubleClick={() => setActiveDb(db.name)}
        title={`${db.name} (${db.file})${db.isActive ? ' — active' : ''}\nDouble-click to set active`}
      >
        <span className={styles.arrow}>
          {expanded ? <DownOutlined /> : <RightOutlined />}
        </span>
        <DatabaseOutlined className={styles.icon} style={{ color: db.isActive ? '#52c41a' : '#e8a427' }} />
        <span className={styles.label}>
          {db.name}
          {db.isActive && <span className={styles.badge}>active</span>}
        </span>
        <span className={styles.count}>{db.tableCount}</span>
        {db.name !== 'main' && (
          <button
            className={styles.deleteBtn}
            title="Delete database"
            onClick={(e) => {
              e.stopPropagation();
              deleteDatabase(db.name);
            }}
          >
            <DeleteOutlined />
          </button>
        )}
      </div>
      {expanded && (
        <div className={styles.children}>
          {tables.length === 0 ? (
            <div className={styles.emptyChild}>No tables</div>
          ) : (
            tables.map((t) => (
              <TableNode
                key={t.name}
                table={t}
                columns={columns[`${db.name}.${t.name}`] || []}
                dbName={db.name}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}

function TableNode({
  table,
  columns,
  dbName,
}: {
  table: TableInfo;
  columns: ColumnInfo[];
  dbName: string;
}) {
  const [expanded, setExpanded] = useState(false);

  const handleDoubleClick = () => {
    const prefix = dbName !== 'main' ? `"${dbName}".` : '';
    const sql = `SELECT * FROM ${prefix}${table.name} LIMIT 100;`;

    // Try to insert into the active editor's model
    const activeTabId = useEditorStore.getState().activeTabId;
    const tab = activeTabId ? useEditorStore.getState().tabs.get(activeTabId) : null;
    if (tab) {
      const uri = monaco.Uri.file(tab.filePath);
      const model = monaco.editor.getModel(uri);
      if (model) {
        const lastLine = model.getLineCount();
        const lastCol = model.getLineMaxColumn(lastLine);
        const currentContent = model.getValue();
        const prefix2 = currentContent.trim() ? '\n' : '';
        model.pushEditOperations(
          [],
          [{ range: new monaco.Range(lastLine, lastCol, lastLine, lastCol), text: prefix2 + sql }],
          () => null,
        );
        return;
      }
    }
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(sql);
  };

  return (
    <div className={styles.node}>
      <div
        className={styles.row}
        style={{ paddingLeft: 28 }}
        onClick={() => setExpanded(!expanded)}
        onDoubleClick={handleDoubleClick}
        title={`${table.name} (${table.type})\nDouble-click to insert SELECT query`}
      >
        <span className={styles.arrow}>
          {columns.length > 0 ? (
            expanded ? <DownOutlined /> : <RightOutlined />
          ) : null}
        </span>
        <TableOutlined className={styles.icon} style={{ color: '#1890ff' }} />
        <span className={styles.label}>{table.name}</span>
        <span className={styles.count}>{table.columnCount}</span>
      </div>
      {expanded && columns.length > 0 && (
        <div className={styles.children}>
          {columns.map((col) => (
            <ColumnNode key={col.name} column={col} />
          ))}
        </div>
      )}
    </div>
  );
}

function ColumnNode({ column }: { column: ColumnInfo }) {
  return (
    <div
      className={styles.row}
      style={{ paddingLeft: 52 }}
      title={`${column.name} ${column.type}${column.isPrimaryKey ? ' PRIMARY KEY' : ''}${column.nullable ? ' NULLABLE' : ' NOT NULL'}${column.defaultValue ? ` DEFAULT ${column.defaultValue}` : ''}`}
    >
      <span className={styles.arrow} />
      {column.isPrimaryKey ? (
        <KeyOutlined className={styles.icon} style={{ color: '#faad14' }} />
      ) : (
        <FieldStringOutlined className={styles.icon} style={{ color: '#8c8c8c' }} />
      )}
      <span className={styles.label}>{column.name}</span>
      <span className={styles.colType}>{column.type}</span>
    </div>
  );
}
