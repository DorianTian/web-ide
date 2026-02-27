import { useEffect } from 'react';

interface Shortcut {
  key: string;
  metaKey?: boolean;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  handler: () => void;
}

export function useKeyboardShortcuts(shortcuts: Shortcut[]): void {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      for (const s of shortcuts) {
        const metaMatch = s.metaKey ? e.metaKey || e.ctrlKey : true;
        const shiftMatch = s.shiftKey ? e.shiftKey : !e.shiftKey || !s.shiftKey;
        const altMatch = s.altKey ? e.altKey : !e.altKey || !s.altKey;

        if (e.key.toLowerCase() === s.key.toLowerCase() && metaMatch && shiftMatch && altMatch) {
          e.preventDefault();
          e.stopPropagation();
          s.handler();
          return;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
}
