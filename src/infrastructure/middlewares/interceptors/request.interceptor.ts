// eslint-disable-next-line prettier/prettier
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';

import { v4 as uuidv4 } from 'uuid';
import { Constants } from '../../config/constants/logger.constants';
import * as httpContext from 'express-http-context';

@Injectable()
export class RequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const requestId = uuidv4();

    httpContext.set(Constants.XCorrelationIdHeader, requestId);
    return next.handle();
  }
}
