import { ApiProperty } from '@nestjs/swagger';

export class PageDto {
  @ApiProperty()
  currentPage: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  perPage: number;
}
