import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SignatureMidlleware } from '../infrastructure/middlewares/signature.middleware';

import { UserRepository } from '../DAL/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
})
export class SignatureModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SignatureMidlleware).forRoutes('*');
  }
}
