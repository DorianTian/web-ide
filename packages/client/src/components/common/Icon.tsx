import {
  FileTextOutlined,
  FolderOutlined,
  FolderOpenOutlined,
  FileOutlined,
  DatabaseOutlined,
  CodeOutlined,
  Html5Outlined,
  FileMarkdownOutlined,
} from '@ant-design/icons';

const FILE_ICON_MAP: Record<string, React.ReactNode> = {
  sql: <DatabaseOutlined style={{ color: '#e8a427' }} />,
  ts: <CodeOutlined style={{ color: '#3178c6' }} />,
  tsx: <CodeOutlined style={{ color: '#3178c6' }} />,
  js: <CodeOutlined style={{ color: '#f7df1e' }} />,
  jsx: <CodeOutlined style={{ color: '#f7df1e' }} />,
  json: <FileTextOutlined style={{ color: '#cbcb41' }} />,
  md: <FileMarkdownOutlined style={{ color: '#519aba' }} />,
  html: <Html5Outlined style={{ color: '#e34c26' }} />,
  css: <FileTextOutlined style={{ color: '#563d7c' }} />,
  py: <CodeOutlined style={{ color: '#3776ab' }} />,
  go: <CodeOutlined style={{ color: '#00add8' }} />,
  yaml: <FileTextOutlined style={{ color: '#cb171e' }} />,
  yml: <FileTextOutlined style={{ color: '#cb171e' }} />,
  sh: <FileTextOutlined style={{ color: '#89e051' }} />,
};

interface FileIconProps {
  name: string;
  isDirectory: boolean;
  isExpanded?: boolean;
}

export function FileIcon({ name, isDirectory, isExpanded }: FileIconProps) {
  if (isDirectory) {
    return isExpanded ? (
      <FolderOpenOutlined style={{ color: '#dcb67a' }} />
    ) : (
      <FolderOutlined style={{ color: '#dcb67a' }} />
    );
  }

  const ext = name.split('.').pop()?.toLowerCase() || '';
  return (FILE_ICON_MAP[ext] || <FileOutlined style={{ color: '#8c8c8c' }} />) as JSX.Element;
}
