import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CurrentUserModule } from './current-user.module';

import { PaymentController } from '../controllers/payment.controller';

import { PaymentService } from '../services/payment.service';

import { TransactionRepository } from '../DAL/repositories/transaction.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionRepository]), CurrentUserModule],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
