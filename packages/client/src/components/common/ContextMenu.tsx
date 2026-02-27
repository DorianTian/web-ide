import { useEffect, useRef } from 'react';
import { useUIStore } from '../../stores/useUIStore';
import styles from './ContextMenu.module.css';

export function ContextMenu() {
  const contextMenu = useUIStore((s) => s.contextMenu);
  const hideContextMenu = useUIStore((s) => s.hideContextMenu);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contextMenu) return;
    const handle = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        hideContextMenu();
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [contextMenu, hideContextMenu]);

  useEffect(() => {
    if (!contextMenu) return;
    const handle = () => hideContextMenu();
    window.addEventListener('blur', handle);
    return () => window.removeEventListener('blur', handle);
  }, [contextMenu, hideContextMenu]);

  if (!contextMenu) return null;

  // Adjust position to stay within viewport
  const menuWidth = 200;
  const menuHeight = contextMenu.items.length * 28;
  const x = Math.min(contextMenu.x, window.innerWidth - menuWidth - 8);
  const y = Math.min(contextMenu.y, window.innerHeight - menuHeight - 8);

  return (
    <div ref={menuRef} className={styles.menu} style={{ left: x, top: y }}>
      {contextMenu.items.map((item, i) =>
        item.separator ? (
          <div key={i} className={styles.separator} />
        ) : (
          <button
            key={i}
            className={styles.item}
            disabled={item.disabled}
            onClick={() => {
              item.onClick?.();
              hideContextMenu();
            }}
          >
            <span className={styles.label}>{item.label}</span>
            {item.shortcut && <span className={styles.shortcut}>{item.shortcut}</span>}
          </button>
        ),
      )}
    </div>
  );
}
