import express from 'express';
import http from 'http';
import cors from 'cors';
import { fileRoutes } from './routes/fileRoutes';
import { healthRoutes } from './routes/healthRoutes';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';
import { createWsServer } from './websocket/wsServer';
import { startWatcher } from './services/watcherService';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(logger);

app.use('/api/v1/health', healthRoutes);
app.use('/api/v1/files', fileRoutes);

app.use(errorHandler);

createWsServer(server);
startWatcher();

server.listen(PORT, () => {
  console.log(`[server] running at http://localhost:${PORT}`);
});

export default app;
