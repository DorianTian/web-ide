import { watch } from 'chokidar';
import path from 'path';
import { broadcast } from '../websocket/wsServer';
import type { WsMessage, FileChangeEvent } from '@data-dev-ide/shared';

const WORKSPACE_ROOT = path.resolve(process.cwd(), 'workspace');

export function startWatcher(): void {
  const watcher = watch(WORKSPACE_ROOT, {
    ignored: /(^|[/\\])\.|node_modules/,
    persistent: true,
    ignoreInitial: true,
  });

  const handleEvent = (eventType: FileChangeEvent['type'], filePath: string) => {
    const relativePath = path.relative(WORKSPACE_ROOT, filePath);
    const event: FileChangeEvent = { type: eventType, path: relativePath };

    let wsType: WsMessage['type'];
    switch (eventType) {
      case 'add':
      case 'addDir':
        wsType = 'file:created';
        break;
      case 'change':
        wsType = 'file:changed';
        break;
      case 'unlink':
      case 'unlinkDir':
        wsType = 'file:deleted';
        break;
      default:
        return;
    }

    broadcast({ type: wsType, payload: event });
  };

  watcher
    .on('add', (p) => handleEvent('add', p))
    .on('change', (p) => handleEvent('change', p))
    .on('unlink', (p) => handleEvent('unlink', p))
    .on('addDir', (p) => handleEvent('addDir', p))
    .on('unlinkDir', (p) => handleEvent('unlinkDir', p));

  console.log('[watcher] watching workspace for changes');
}
