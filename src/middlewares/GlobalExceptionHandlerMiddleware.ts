import { GlobalExceptionHandler } from './GlobalExceptionHandler';
import { Request, Response, NextFunction } from 'express';
import * as HttpStatus from 'http-status-codes';

export function globalExceptionHandlerMiddleware(
  exceptionHandler: GlobalExceptionHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status =
    exceptionHandler.status || HttpStatus.INTERNAL_SERVER_ERROR;
  const message = exceptionHandler.message || 'Something went wrong';
  res.status(status).send({
    timestamp: new Date(),
    status: status,
    message: message,
  });
  next();
}
