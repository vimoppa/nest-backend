import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CurrentUserService } from '../services/current-user.service';

import { UserRepository } from '../DAL/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [CurrentUserService],
  exports: [CurrentUserService],
})
export class CurrentUserModule {}
