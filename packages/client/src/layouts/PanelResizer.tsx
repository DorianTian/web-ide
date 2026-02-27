import { useResizable } from '../hooks/useResizable';
import styles from './PanelResizer.module.css';

interface PanelResizerProps {
  direction: 'horizontal' | 'vertical';
  size: number;
  minSize: number;
  maxSize: number;
  defaultSize: number;
  onResize: (size: number) => void;
  reverse?: boolean;
}

export function PanelResizer({
  direction,
  size,
  minSize,
  maxSize,
  defaultSize,
  onResize,
  reverse,
}: PanelResizerProps) {
  const { handleMouseDown, handleDoubleClick } = useResizable({
    direction,
    initialSize: size,
    minSize,
    maxSize,
    defaultSize,
    onResize,
    reverse,
  });

  return (
    <div
      className={`${styles.resizer} ${direction === 'horizontal' ? styles.horizontal : styles.vertical}`}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
    />
  );
}
