import { create } from 'zustand';
import type { DatabaseInfo, TableInfo, ColumnInfo } from '@data-dev-ide/shared';
import { sqlApi } from '../services/api';

interface DatabaseState {
  databases: DatabaseInfo[];
  activeDb: string;
  tables: Record<string, TableInfo[]>;
  columns: Record<string, ColumnInfo[]>;
  loading: boolean;

  fetchSchemas: () => Promise<void>;
  setActiveDb: (name: string) => Promise<void>;
  createDatabase: (name: string) => Promise<void>;
  deleteDatabase: (name: string) => Promise<void>;
  refreshSchema: () => Promise<void>;
}

export const useDatabaseStore = create<DatabaseState>()((set, get) => ({
  databases: [],
  activeDb: 'main',
  tables: {},
  columns: {},
  loading: false,

  fetchSchemas: async () => {
    set({ loading: true });
    try {
      const schema = await sqlApi.getSchemas();
      const activeDb = schema.databases.find((d) => d.isActive)?.name || 'main';
      set({
        databases: schema.databases,
        activeDb,
        tables: schema.tables,
        columns: schema.columns,
        loading: false,
      });
    } catch {
      set({ loading: false });
    }
  },

  setActiveDb: async (name: string) => {
    await sqlApi.setActiveDatabase(name);
    set({ activeDb: name });
    // Update isActive flags locally
    set((s) => ({
      databases: s.databases.map((d) => ({ ...d, isActive: d.name === name })),
    }));
  },

  createDatabase: async (name: string) => {
    await sqlApi.createDatabase(name);
    await get().fetchSchemas();
  },

  deleteDatabase: async (name: string) => {
    await sqlApi.deleteDatabase(name);
    await get().fetchSchemas();
  },

  refreshSchema: async () => {
    await get().fetchSchemas();
  },
}));
