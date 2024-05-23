import { OrderTypeEnum } from '../../types/enums/order-type.enum';

export class EnumMapperUtil {
  static mapOrderType(value: OrderTypeEnum): 'ASC' | 'DESC' {
    switch (value) {
      case OrderTypeEnum.ASC:
        return 'ASC';
      case OrderTypeEnum.DESC:
        return 'DESC';
      default:
        return undefined;
    }
  }
}
