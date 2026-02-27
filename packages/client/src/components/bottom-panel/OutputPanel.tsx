import { useEffect, useState, useRef } from 'react';
import { wsService } from '../../services/wsService';
import type { WsMessage } from '@data-dev-ide/shared';
import styles from './OutputPanel.module.css';

interface LogEntry {
  id: number;
  time: string;
  type: string;
  message: string;
}

let logId = 0;

export function OutputPanel() {
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: logId++, time: new Date().toLocaleTimeString(), type: 'info', message: 'IDE started' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = wsService.subscribe((msg: WsMessage) => {
      const entry: LogEntry = {
        id: logId++,
        time: new Date().toLocaleTimeString(),
        type: msg.type,
        message: JSON.stringify(msg.payload),
      };
      setLogs((prev) => [...prev.slice(-200), entry]);
    });
    return unsub;
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className={styles.panel}>
      {logs.map((log) => (
        <div key={log.id} className={styles.entry}>
          <span className={styles.time}>{log.time}</span>
          <span className={`${styles.type} ${styles[log.type.split(':')[0]] || ''}`}>
            [{log.type}]
          </span>
          <span className={styles.message}>{log.message}</span>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
