import { EntityRepository, Repository } from 'typeorm';

import { TransactionStateEnum } from '../../types/enums/transaction-state.enum';
import { TransactionEntity } from '../entities/transaction.entity';

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
