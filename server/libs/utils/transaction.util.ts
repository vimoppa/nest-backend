import { TransactionEntity } from '../../db/entities/transaction.entity';

export class TransactionUtil {
  static getLatest(transactions: TransactionEntity[]): TransactionEntity {
    if (transactions?.length < 1) {
      return undefined;
    }

    let latest = transactions[0];
    for (const transaction of transactions) {
      if (transaction.createdAt > latest.createdAt) {
        latest = transaction;
      }
    }

    return latest;
  }
}
