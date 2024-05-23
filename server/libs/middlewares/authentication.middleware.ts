import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as httpContext from 'express-http-context';
import { HttpContextConstant } from 'server/constants/http-context.constant';

import { TimeInMsConstant } from '../../constants/time-in-ms.constant';
import { UserRepository } from '../../db/repositories/user.repository';

/**
 * AuthenticationMidlleware is a middleware that checks the signature and timestamp headers.
 */
@Injectable()
export class AuthenticationMidlleware implements NestMiddleware {
  constructor(private readonly userRepository: UserRepository) {}

  async use(req: Request, _res: Response, next: NextFunction) {
    const signature = req.headers['signature'] as string;
    const timestamp = req.headers['timestamp'] as string;
    const now = Date.now();

    if (timestamp == null || signature == null) {
      next();
      return;
    }

    if (now - parseInt(timestamp) > TimeInMsConstant.HOUR * 12) {
      console.log('expired signature');
      throw new UnauthorizedException();
    }

    // httpContext.set(HttpContextConstant.haveSubscription, haveSubscription);
    // httpContext.set(HttpContextConstant.isNewUser, isNewUser);
    httpContext.set(HttpContextConstant.currentUserId, '<id>');
    next();
  }
}
