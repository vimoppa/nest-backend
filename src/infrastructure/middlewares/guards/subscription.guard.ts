import { CanActivate, Injectable } from '@nestjs/common';

import * as httpContext from 'express-http-context';

import { HttpContextConstant } from '../../../infrastructure/config/constants/http-context.constant';

@Injectable()
export class SubscriptionGuard implements CanActivate {
  canActivate(): boolean {
    return httpContext.get(HttpContextConstant.haveSubscription) ?? false;
  }
}
