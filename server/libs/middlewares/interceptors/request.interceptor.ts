// eslint-disable-next-line prettier/prettier
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import * as httpContext from 'express-http-context';
import { v4 as uuidv4 } from 'uuid';

import { Constants } from '../../../constants/logger.constants';

@Injectable()
export class RequestInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const requestId = uuidv4();

    httpContext.set(Constants.XCorrelationIdHeader, requestId);
    return next.handle();
  }
}
