import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from '../db/repositories/user.repository';
import { AuthenticationMidlleware } from '../libs/middlewares/authentication.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
})
export class AuthenticationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMidlleware).forRoutes('*');
  }
}
