import { WebSocketServer, WebSocket } from 'ws';
import type { Server } from 'http';
import type { WsMessage } from '@data-dev-ide/shared';

let wss: WebSocketServer;

export function createWsServer(server: Server): WebSocketServer {
  wss = new WebSocketServer({ server, path: '/ws' });

  wss.on('connection', (ws) => {
    console.log('[ws] client connected');
    const msg: WsMessage = { type: 'connection:established', payload: null };
    ws.send(JSON.stringify(msg));

    ws.on('close', () => {
      console.log('[ws] client disconnected');
    });
  });

  return wss;
}

export function broadcast(message: WsMessage): void {
  if (!wss) return;
  const data = JSON.stringify(message);
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}
