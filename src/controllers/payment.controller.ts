import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from '@nestjs/common';

import { PaymentService } from '../services/payment.service';

import { AuthGuard } from '../infrastructure/middlewares/guards/auth.guard';

import { SubscriptionStateDto } from '../dtos/subscription-state.dto';
import { TransactionDto } from '../dtos/transaction.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('payment')
@UseGuards(AuthGuard)
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('transaction')
  @ApiResponse({ status: 200, description: 'send transaction hash to update payment' })
  async addTransaction(@Body(ValidationPipe) transaction: TransactionDto) {
    return {};
  }

  @Get('/subscription/state')
  @ApiResponse({ status: 200, description: 'returns transactions state and subscription state', type: SubscriptionStateDto })
  async getSubscriptionState() {
    return {};
  }
}
