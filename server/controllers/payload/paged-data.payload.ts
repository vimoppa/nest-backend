import { ApiProperty } from '@nestjs/swagger';

import { PageQuery } from './page.payload';

export class PagedItemsQuery<T> {
  @ApiProperty({ type: PageQuery })
  meta: PageQuery;

  @ApiProperty()
  items: T;
}
