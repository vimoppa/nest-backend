import { Injectable } from '@nestjs/common';
import * as httpContext from 'express-http-context';

import { UserEntity } from '../DAL/entities/user.entity';
import { UserRepository } from '../DAL/repositories/user.repository';

import { HttpContextConstant } from '../infrastructure/config/constants/http-context.constant';

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
