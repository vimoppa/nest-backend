import { ApiProperty } from '@nestjs/swagger';
import { PageDto } from './page.dto';

export class PagedItemsDto<T> {
  @ApiProperty({ type: PageDto })
  meta: PageDto;
  @ApiProperty()
  items: T;
}
