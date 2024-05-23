import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export class PaginationQuery {
  @ApiPropertyOptional({
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  @Min(0)
  @IsOptional()
  page: number;

  @ApiProperty({
    minimum: 0,
    maximum: 50,
    default: 20,
  })
  @IsNumber()
  @Min(1)
  @Max(50)
  @IsOptional()
  perPage: number;

  constructor(page = 0, perPage = 20) {
    this.page = page;
    this.perPage = perPage;
  }
}
