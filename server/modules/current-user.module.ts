import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from '../db/repositories/user.repository';
import { CurrentUserService } from '../services/current-user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [CurrentUserService],
  exports: [CurrentUserService],
})
export class CurrentUserModule {}
