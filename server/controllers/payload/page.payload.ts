import { ApiProperty } from '@nestjs/swagger';

export class PageQuery {
  @ApiProperty()
  currentPage: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  perPage: number;
}
