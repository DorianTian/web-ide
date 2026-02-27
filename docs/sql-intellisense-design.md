# SQL IntelliSense + Database Explorer 设计方案

## 1. 需求概述

为 Data Dev IDE 添加 **SQL 智能补全** 和 **数据库管理面板**，核心能力：

1. **Database Explorer** — 左侧 Activity Bar 新增数据库图标，点击展开数据库资源管理面板
   - 树形结构：Database → Tables → Columns
   - 支持创建/切换/删除多个 SQLite 数据库（存放在 `workspace/.data/` 下）
   - 当前活跃数据库高亮显示

2. **SQL IntelliSense** — 基于 Schema 元数据的上下文感知补全
   - `db_name.` → 联想该库下所有表
   - `table_name.` → 联想该表所有字段（带类型信息）
   - 选中某个 DB 后，编辑器中直接输入可补全该 DB 下的表名
   - `FROM` / `JOIN` 后 → 优先补全表名
   - `SELECT` / `WHERE` / `ON` 后 → 补全已引用表的字段

3. **自动刷新** — 执行 DDL 后自动刷新 Schema 元数据

---

## 2. 架构设计

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend                              │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────────────┐  │
│  │  ActivityBar  │  │  SidePanel   │  │  Monaco Editor     │  │
│  │  + DB icon    │  │  + DBExplorer│  │  + CompletionProv  │  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬────────────┘  │
│         │                  │                  │               │
│         └──────────┬───────┘                  │               │
│                    │                          │               │
│              ┌─────▼──────┐           ┌──────▼────────┐      │
│              │ useDatabase │◄──────────│ schemaRegistry │     │
│              │   Store     │──────────►│ (补全数据源)    │     │
│              └─────┬───────┘           └───────────────┘      │
│                    │                                          │
└────────────────────┼──────────────────────────────────────────┘
                     │  HTTP API
┌────────────────────┼──────────────────────────────────────────┐
│                    ▼         Backend                           │
│  ┌────────────────────────────────────────────┐               │
│  │            sqlRoutes (扩展)                  │               │
│  │  GET  /databases         列出所有 DB         │               │
│  │  POST /databases         创建新 DB           │               │
│  │  PUT  /databases/active  切换活跃 DB         │               │
│  │  DEL  /databases/:name   删除 DB             │               │
│  │  GET  /schemas           获取 Schema 元数据   │               │
│  │  POST /execute           执行 SQL (已有)      │               │
│  └────────────────────┬───────────────────────┘               │
│                       │                                       │
│               ┌───────▼────────┐                              │
│               │  sqlService    │                              │
│               │  (多 DB 管理)   │                              │
│               │  ATTACH/DETACH │                              │
│               └───────┬────────┘                              │
│                       │                                       │
│          ┌────────────┼────────────┐                          │
│          ▼            ▼            ▼                           │
│     main.db      analytics.db   custom.db                     │
│  (workspace/.data/)                                           │
└───────────────────────────────────────────────────────────────┘
```

---

## 3. 数据模型

### 3.1 共享类型 (`packages/shared/src/types/api.ts`)

```typescript
// 数据库信息
export interface DatabaseInfo {
  name: string;        // 数据库名（main / 用户自定义名）
  file: string;        // 文件名（如 ide.db）
  isActive: boolean;   // 是否为当前活跃库
  tableCount: number;
}

// 表信息
export interface TableInfo {
  name: string;
  database: string;    // 所属数据库
  type: 'table' | 'view';
  columnCount: number;
  rowCount?: number;   // 可选，大表不查
}

// 字段信息
export interface ColumnInfo {
  name: string;
  type: string;        // TEXT, INTEGER, REAL 等
  nullable: boolean;
  isPrimaryKey: boolean;
  defaultValue: string | null;
}

// Schema 元数据（一次性返回完整结构）
export interface SchemaMetadata {
  databases: DatabaseInfo[];
  tables: Record<string, TableInfo[]>;            // key = db_name
  columns: Record<string, Record<string, ColumnInfo[]>>; // key = db_name.table_name 展开为两层
}
```

### 3.2 API 接口

| 方法 | 路径 | 说明 | 请求/响应 |
|------|------|------|-----------|
| GET | `/api/v1/sql/databases` | 列出所有 DB | → `DatabaseInfo[]` |
| POST | `/api/v1/sql/databases` | 创建新 DB | `{ name: string }` → `DatabaseInfo` |
| PUT | `/api/v1/sql/databases/active` | 切换活跃 DB | `{ name: string }` → `void` |
| DELETE | `/api/v1/sql/databases/:name` | 删除 DB | → `void` |
| GET | `/api/v1/sql/schemas` | 获取完整 Schema | `?db=` (可选) → `SchemaMetadata` |

---

## 4. 后端实现

### 4.1 sqlService 扩展（多 DB 管理）

**核心机制**：使用 SQLite 的 `ATTACH DATABASE` 将多个 .db 文件挂载到同一个连接。

```
workspace/.data/
├── ide.db            ← main 数据库（默认，包含 demo 数据）
├── analytics.db      ← 用户创建的额外数据库
└── custom.db
```

**关键实现**：

```typescript
// 创建新 DB
function createDatabase(name: string): void {
  const dbPath = path.join(DB_DIR, `${name}.db`);
  db.exec(`ATTACH DATABASE '${dbPath}' AS "${name}"`);
}

// 获取 Schema（利用 SQLite pragma）
function getSchemas(): SchemaMetadata {
  // 1. 查所有已挂载的 DB
  const dbList = db.pragma('database_list') as { name: string; file: string }[];

  // 2. 每个 DB 查表列表
  // SELECT name, type FROM {db}.sqlite_master WHERE type IN ('table','view')

  // 3. 每个表查字段
  // PRAGMA {db}.table_info('{table}')

  return { databases, tables, columns };
}
```

**activeDb 管理**：用一个内存变量记录当前活跃的 DB 名。执行 SQL 时如果需要可以自动在未限定的表名前加 DB 前缀。但更推荐的做法是让 IntelliSense 帮用户写完整名称，执行时不做改写。

### 4.2 自动刷新

在 `execute()` 方法中：
1. 执行 SQL
2. 检测 SQL 是否为 DDL（CREATE/ALTER/DROP/ATTACH/DETACH）
3. 如果是 DDL，返回结果中附加 `schemaChanged: true` 标记
4. 前端收到标记后自动调用 `GET /schemas` 刷新

```typescript
// 在 SqlExecuteResult 中增加
export interface SqlExecuteResult {
  // ... 已有字段
  schemaChanged?: boolean;  // DDL 执行后标记
}
```

---

## 5. 前端实现

### 5.1 状态管理 — `useDatabaseStore`

```typescript
// packages/client/src/stores/useDatabaseStore.ts
interface DatabaseState {
  // 数据
  databases: DatabaseInfo[];
  activeDb: string;                              // 当前选中的 DB 名
  tables: Record<string, TableInfo[]>;           // db → tables
  columns: Record<string, ColumnInfo[]>;         // "db.table" → columns

  // Actions
  fetchDatabases: () => Promise<void>;
  fetchSchemas: (db?: string) => Promise<void>;
  setActiveDb: (name: string) => Promise<void>;
  createDatabase: (name: string) => Promise<void>;
  deleteDatabase: (name: string) => Promise<void>;
  refreshSchema: () => Promise<void>;
}
```

### 5.2 Activity Bar + Database Explorer

**Activity Bar 扩展**：

在 `ActivityItem` 类型中添加 `'database'`：
```typescript
export type ActivityItem = 'explorer' | 'search' | 'git' | 'extensions' | 'settings' | 'database';
```

在 `ActivityBar.tsx` 的 ITEMS 数组中添加：
```typescript
{ id: 'database', icon: <DatabaseOutlined />, title: 'Database Explorer' }
```

**DatabaseExplorer 组件**（`packages/client/src/components/database/DatabaseExplorer.tsx`）：

```
┌──────────────────────────────┐
│  DATABASE EXPLORER           │
│  [+ New DB]  [↻ Refresh]    │
├──────────────────────────────┤
│  ▼ 🗄️ main (active)        │  ← 点击切换 active DB
│    ▼ 📋 users               │  ← 表
│      ├ 🔑 user_id  INTEGER  │  ← 字段（PK 标记）
│      ├   username   TEXT     │
│      ├   email      TEXT     │
│      └   status     INTEGER  │
│    ▶ 📋 orders               │
│  ▶ 🗄️ analytics             │
└──────────────────────────────┘
```

组件树：
```
DatabaseExplorer
├── DatabaseToolbar        — [+ New DB] [↻ Refresh] 按钮
└── DatabaseTree
    └── DatabaseNode       — 展开显示表
        └── TableNode      — 展开显示字段
            └── ColumnNode — 字段名 + 类型 + PK 标记
```

**交互逻辑**：
- 点击 DB 节点 → 切换为 activeDb
- 双击表名 → 自动在编辑器中插入 `SELECT * FROM table_name LIMIT 100;`
- 右键表名 → 上下文菜单：Query Table / Copy Name / Drop Table
- 展开 DB 节点 → 懒加载表和字段

### 5.3 SQL IntelliSense 增强

改造现有 `completionProvider.ts`，增加 Schema 感知能力。

**核心思路**：注册一个 `triggerCharacters: ['.']` 的 CompletionItemProvider，当用户输入 `.` 时，解析前缀以判断补全类型。

**上下文解析逻辑**（简化版 SQL token 解析）：

```
用户输入                     →  补全类型            →  补全内容
─────────────────────────────────────────────────────────────
"main."                     →  dot-after-db        →  main 库下所有表
"users."                    →  dot-after-table     →  users 表的所有字段
"main.users."               →  dot-after-db-table  →  users 表的所有字段
"FROM u"                    →  after-FROM          →  所有表名
"JOIN o"                    →  after-JOIN          →  所有表名
"SELECT u"                  →  after-SELECT        →  已引用表的所有字段 + 表别名
普通输入（无特殊上下文）      →  default             →  keywords + functions + 活跃 DB 的表名
```

**别名解析**：
解析当前 SQL 中的 `FROM table_name alias` 和 `JOIN table_name alias` 子句，构建 `alias → table_name` 映射。当用户输入 `alias.` 时，提供对应表的字段补全。

```typescript
// 别名映射示例
// SQL: SELECT u. FROM users u LEFT JOIN orders o ON ...
// 解析得到：{ u: 'users', o: 'orders' }
// 输入 "u." → 补全 users 表的字段
// 输入 "o." → 补全 orders 表的字段
```

**补全优先级**（sortText）：

| 优先级 | 类型 | sortText 前缀 |
|--------|------|---------------|
| 0 | Snippets | `0` |
| 1 | 表名（上下文相关） | `1` |
| 2 | 字段名（上下文相关） | `2` |
| 3 | SQL Keywords | `3` |
| 4 | SQL Functions | `4` |
| 5 | SQL Types | `5` |

**CompletionItemKind 映射**：
- Database → `Module`
- Table → `Struct`
- Column → `Field`
- PK Column → `Field` + 🔑 标记

### 5.4 自动刷新流程

```
用户执行 SQL (⌘+Enter)
      │
      ▼
executeSql() → POST /api/v1/sql/execute
      │
      ▼
返回 SqlExecuteResult
      │
      ├── schemaChanged: true ?
      │        │
      │        ▼ YES
      │   useDatabaseStore.refreshSchema()
      │        │
      │        ▼
      │   GET /api/v1/sql/schemas
      │        │
      │        ▼
      │   更新 store → 补全数据源自动更新
      │
      └── schemaChanged: false/undefined
               │
               ▼
          正常展示结果
```

---

## 6. 文件清单

### 新增文件

| 文件 | 说明 |
|------|------|
| `packages/client/src/components/database/DatabaseExplorer.tsx` | 数据库资源管理面板 |
| `packages/client/src/components/database/DatabaseExplorer.module.css` | 面板样式 |
| `packages/client/src/components/database/DatabaseTree.tsx` | DB/Table/Column 树组件 |
| `packages/client/src/components/database/DatabaseTree.module.css` | 树样式 |
| `packages/client/src/stores/useDatabaseStore.ts` | 数据库状态管理 |
| `packages/server/src/services/schemaService.ts` | Schema 元数据查询服务 |

### 修改文件

| 文件 | 变更 |
|------|------|
| `packages/shared/src/types/api.ts` | 新增 DatabaseInfo / TableInfo / ColumnInfo / SchemaMetadata 类型，SqlExecuteResult 增加 schemaChanged |
| `packages/shared/src/types/layout.ts` | ActivityItem 增加 `'database'` |
| `packages/server/src/routes/sqlRoutes.ts` | 增加 databases / schemas 路由 |
| `packages/server/src/controllers/sqlController.ts` | 增加 databases / schemas 控制器方法 |
| `packages/server/src/services/sqlService.ts` | 支持多 DB (ATTACH/DETACH)，DDL 检测，Schema 查询 |
| `packages/client/src/layouts/ActivityBar.tsx` | 添加 database 图标 |
| `packages/client/src/layouts/SidePanel.tsx` | 添加 DatabaseExplorer 渲染 |
| `packages/client/src/features/monaco/languages/sql/completionProvider.ts` | Schema 感知补全（核心改造） |
| `packages/client/src/features/monaco/setup.ts` | 可能需要调整 provider 注册方式 |
| `packages/client/src/stores/useEditorStore.ts` | executeSql 后检查 schemaChanged 并触发刷新 |
| `packages/client/src/services/api.ts` | 新增 schema/database API 方法 |

---

## 7. 实现顺序

```
Phase 1: Schema 基础设施
  ├── 1.1 共享类型定义
  ├── 1.2 后端 schemaService + API 路由
  └── 1.3 前端 useDatabaseStore + API

Phase 2: Database Explorer 面板
  ├── 2.1 ActivityItem 类型扩展
  ├── 2.2 ActivityBar + SidePanel 集成
  └── 2.3 DatabaseExplorer + DatabaseTree 组件

Phase 3: SQL IntelliSense
  ├── 3.1 completionProvider 改造（Schema 感知）
  ├── 3.2 上下文解析（dot-after-db, dot-after-table, after-FROM 等）
  └── 3.3 别名解析

Phase 4: 自动刷新 + 联动
  ├── 4.1 DDL 检测 + schemaChanged 标记
  ├── 4.2 执行后自动刷新 Schema
  └── 4.3 双击表名插入查询
```

---

## 8. 关键设计决策

| 决策点 | 选择 | 理由 |
|--------|------|------|
| Schema 获取粒度 | 一次性全量返回 | SQLite 库小，通常不超过几十张表，全量返回避免多次请求 |
| 多 DB 实现方式 | ATTACH DATABASE | SQLite 原生支持，同一连接可操作多个 DB，语义清晰 |
| 补全触发机制 | `triggerCharacters: ['.']` + 默认字母触发 | `.` 触发精确补全，字母输入触发模糊补全 |
| SQL 解析方式 | ANTLR4 (antlr4ng) + c3 (Code Completion Core) | AST 级解析，准确的上下文判断，支持不完整 SQL 的容错，别名解析 |
| Schema 缓存 | 前端 Zustand store | 避免重复请求，DDL 执行后主动失效并重新获取 |
| 活跃 DB 管理 | 前端 store + 后端持久化 | 前端控制 UI，后端记录以支持刷新后恢复 |
