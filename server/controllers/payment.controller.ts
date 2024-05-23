import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiHeaders, ApiResponse } from '@nestjs/swagger';

import { AuthGuard } from '../libs/middlewares/guards/auth.guard';
import { PaymentService } from '../services/payment.service';

import { SubscriptionStateResponse } from './payload/subscription-state.payload';
import { TransactionInput } from './payload/transaction.payload';

@Controller('payment')
@UseGuards(AuthGuard)
@ApiHeaders([
  { name: 'signature', required: true },
  { name: 'timestamp', required: true },
])
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('transaction')
  @ApiResponse({ status: 200, description: 'send transaction hash to update payment' })
  async addTransaction(@Body(ValidationPipe) _transaction: TransactionInput) {
    console.debug({ _transaction });
    return {};
  }

  @Get('/subscription/state')
  @ApiResponse({ status: 200, description: 'returns transactions state and subscription state', type: SubscriptionStateResponse })
  async getSubscriptionState() {
    return {};
  }
}
