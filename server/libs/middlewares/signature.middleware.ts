import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { TimeInMsConstant } from '../../constants/time-in-ms.constant';
import { UserRepository } from '../../db/repositories/user.repository';

@Injectable()
export class SignatureMidlleware implements NestMiddleware {
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
    // httpContext.set(HttpContextConstant.currentUserId, user.id);
    next();
  }
}
