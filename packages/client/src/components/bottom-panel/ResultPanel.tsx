import { Table } from 'antd';
import styles from './ResultPanel.module.css';

// Placeholder — will be populated when SQL execution is implemented
const DEMO_COLUMNS = [
  { title: 'user_id', dataIndex: 'user_id', key: 'user_id', width: 100 },
  { title: 'username', dataIndex: 'username', key: 'username', width: 150 },
  { title: 'order_count', dataIndex: 'order_count', key: 'order_count', width: 120 },
  { title: 'total_amount', dataIndex: 'total_amount', key: 'total_amount', width: 130 },
];

const DEMO_DATA = [
  { key: '1', user_id: 1001, username: 'alice', order_count: 12, total_amount: '¥8,450.00' },
  { key: '2', user_id: 1002, username: 'bob', order_count: 8, total_amount: '¥5,320.00' },
  { key: '3', user_id: 1003, username: 'charlie', order_count: 15, total_amount: '¥12,100.00' },
];

export function ResultPanel() {
  return (
    <div className={styles.panel}>
      <Table
        columns={DEMO_COLUMNS}
        dataSource={DEMO_DATA}
        size="small"
        pagination={false}
        scroll={{ x: true, y: 'calc(100% - 39px)' }}
        className={styles.table}
      />
    </div>
  );
}
