import { CanActivate, Injectable } from '@nestjs/common';
import * as httpContext from 'express-http-context';

import { HttpContextConstant } from '../../../constants/http-context.constant';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return httpContext.get(HttpContextConstant.currentUserId) != null;
  }
}
