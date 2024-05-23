import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PaymentController } from '../controllers/payment.controller';
import { TransactionRepository } from '../db/repositories/transaction.repository';
import { PaymentService } from '../services/payment.service';

import { CurrentUserModule } from './current-user.module';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionRepository]), CurrentUserModule],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
