import express, { Request } from 'express';
import routes from './routes';
import { globalExceptionHandlerMiddleware } from './middlewares/GlobalExceptionHandlerMiddleware';
import { GlobalExceptionHandler } from './middlewares/GlobalExceptionHandler';
import * as HttpStatus from 'http-status-codes';
import { config } from './config/config';
import { swaggerDocument } from './swagger';

const swaggerUi = require('swagger-ui-express');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(config.app.basePath || '/', routes);

app.all('*', (req: Request) => {
  throw new GlobalExceptionHandler(
    HttpStatus.NOT_FOUND,
    `Can't find ${req.originalUrl} on this server`
  );
});

app.use(globalExceptionHandlerMiddleware);

export default app;
