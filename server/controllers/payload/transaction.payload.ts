import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class TransactionInput {
  @ApiProperty()
  @IsDefined()
  @IsString()
  hash: string;
}
