import styles from './FileSearchBar.module.css';

interface FileSearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function FileSearchBar({ value, onChange }: FileSearchBarProps) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Filter files..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
