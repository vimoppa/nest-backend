import { HttpStatus } from '@nestjs/common';

export interface IApiResponse<resType> {
  status: HttpStatus;
  data: resType;
  error: string[];
}
