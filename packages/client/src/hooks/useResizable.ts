import { useCallback, useRef } from 'react';

interface UseResizableOptions {
  direction: 'horizontal' | 'vertical';
  initialSize: number;
  minSize: number;
  maxSize: number;
  defaultSize: number;
  onResize: (size: number) => void;
  reverse?: boolean;
}

export function useResizable({
  direction,
  initialSize,
  minSize,
  maxSize,
  defaultSize,
  onResize,
  reverse = false,
}: UseResizableOptions) {
  const startPosRef = useRef(0);
  const startSizeRef = useRef(initialSize);
  const isResizingRef = useRef(false);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      isResizingRef.current = true;
      startPosRef.current = direction === 'horizontal' ? e.clientX : e.clientY;
      startSizeRef.current = initialSize;

      document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
      document.body.style.userSelect = 'none';

      const handleMouseMove = (e: MouseEvent) => {
        if (!isResizingRef.current) return;
        const currentPos = direction === 'horizontal' ? e.clientX : e.clientY;
        const diff = reverse
          ? startPosRef.current - currentPos
          : currentPos - startPosRef.current;
        const newSize = Math.max(minSize, Math.min(maxSize, startSizeRef.current + diff));
        onResize(newSize);
      };

      const handleMouseUp = () => {
        isResizingRef.current = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [direction, initialSize, minSize, maxSize, onResize, reverse],
  );

  const handleDoubleClick = useCallback(() => {
    onResize(defaultSize);
  }, [defaultSize, onResize]);

  return { handleMouseDown, handleDoubleClick };
}
