import express from 'express';
import cors from 'cors';
import { fileRoutes } from './routes/fileRoutes';
import { healthRoutes } from './routes/healthRoutes';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(logger);

app.use('/api/v1/health', healthRoutes);
app.use('/api/v1/files', fileRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[server] running at http://localhost:${PORT}`);
});

export default app;
