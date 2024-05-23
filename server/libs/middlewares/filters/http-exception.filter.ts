import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

import { IErrorResponse, IResponse } from '../../../types/interfaces/response.interface';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  // constructor() {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const error = exception.getResponse() as IErrorResponse;
    const message = Array.isArray(error.message) ? error.message : [error.message];
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const errorResponse: IResponse<null> = {
      status,
      data: null,
      error: message,
    };
    console.log(error.message.toString());
    console.error(error);

    response.status(status).json(errorResponse);
  }
}
