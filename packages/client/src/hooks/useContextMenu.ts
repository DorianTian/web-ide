import { useCallback } from 'react';
import { useUIStore, type ContextMenuItem } from '../stores/useUIStore';

export function useContextMenu() {
  const showContextMenu = useUIStore((s) => s.showContextMenu);

  const onContextMenu = useCallback(
    (e: React.MouseEvent, items: ContextMenuItem[]) => {
      e.preventDefault();
      e.stopPropagation();
      showContextMenu({ x: e.clientX, y: e.clientY, items });
    },
    [showContextMenu],
  );

  return { onContextMenu };
}
