import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';
//import userRoutes from './routes/user.routes';
//import errorMiddleware from './middlewares/errorHandler';

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//app.use(errorMiddleware);
// Error handling middleware should be last
app.use(errorHandler);

export default app;
