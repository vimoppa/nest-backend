import { Injectable } from '@nestjs/common';
import * as httpContext from 'express-http-context';

import { HttpContextConstant } from '../constants/http-context.constant';
import { UserEntity } from '../db/entities/user.entity';
import { UserRepository } from '../db/repositories/user.repository';

@Injectable()
export class CurrentUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getCurrentUser(): Promise<UserEntity> {
    const userId = httpContext.get(HttpContextConstant.currentUserId);

    return this.userRepository.getById(userId);
  }

  getIsNewUser(): boolean {
    return httpContext.get(HttpContextConstant.isNewUser);
  }

  getSubscription(): boolean {
    return httpContext.get(HttpContextConstant.haveSubscription) ?? false;
  }
}
