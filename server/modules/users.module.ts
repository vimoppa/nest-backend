import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from '../controllers/users.controller';
import { UsersService } from '../services/users.service';

import { CurrentUserModule } from './current-user.module';

@Module({
  imports: [TypeOrmModule.forFeature([]), CurrentUserModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
