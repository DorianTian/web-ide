import { useEffect } from 'react';
import { WorkbenchLayout } from './layouts/WorkbenchLayout';
import { useDatabaseStore } from './stores/useDatabaseStore';

export function App() {
  const fetchSchemas = useDatabaseStore((s) => s.fetchSchemas);

  useEffect(() => {
    fetchSchemas();
  }, [fetchSchemas]);

  return <WorkbenchLayout />;
}
