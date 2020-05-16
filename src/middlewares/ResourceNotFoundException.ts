import * as HttpStatus from 'http-status-codes';
import { GlobalExceptionHandler } from './GlobalExceptionHandler';

export class ResourceNotFoundException extends GlobalExceptionHandler {
  constructor(message: string) {
    super(HttpStatus.NOT_FOUND, message);
  }
}
