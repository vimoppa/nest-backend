import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class TransactionDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  hash: string;
}
