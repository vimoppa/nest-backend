import { HttpStatus } from '@nestjs/common';

export interface IErrorResponse {
  message: string[];
}

export interface IResponse<resType> {
  status: HttpStatus;
  data: resType;
  error: string[];
}
