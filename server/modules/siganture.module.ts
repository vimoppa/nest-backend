import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from '../db/repositories/user.repository';
import { SignatureMidlleware } from '../libs/middlewares/signature.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
})
export class SignatureModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SignatureMidlleware).forRoutes('*');
  }
}
