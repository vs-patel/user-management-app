import {
  Middleware,
  ExpressErrorMiddlewareInterface,
} from 'routing-controllers';

@Middleware({ type: 'after' })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
  error(
    error: any,
    request: any,
    response: any,
    next: (err?: any) => any,
  ): void {
    let errorObj = {
      code: 500,
      message: 'Internal Server error',
      description: 'Something went wrong',
    };
    if (error.httpCode) {
      errorObj = { ...errorObj, code: error.httpCode };
    }
    if (error.message) {
      errorObj = { ...errorObj, message: error.message };
    }
    if (error.errors) {
      errorObj = { ...errorObj, description: error.errors };
    }
    response.status(error?.httpCode).send(errorObj);
    next();
  }
}
