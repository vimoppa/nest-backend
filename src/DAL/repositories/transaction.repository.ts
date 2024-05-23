import { EntityRepository, Repository } from 'typeorm';

import { TransactionEntity } from '../entities/transaction.entity';

import { TransactionStateEnum } from '../../infrastructure/config/enums/transaction-state.enum';

@EntityRepository(TransactionEntity)
export class TransactionRepository extends Repository<TransactionEntity> {
  async getAllNotFinished(): Promise<TransactionEntity[]> {
    return this.find({
      where: {
        state: TransactionStateEnum.unknown,
      },
    });
  }

  async getByHash(hash: string): Promise<TransactionEntity> {
    return this.findOne({
      where: {
        hash: hash,
      },
    });
  }
}
