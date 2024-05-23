import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { RequestStatus } from '../../infrastructure/config/enums/request-status.enum';

export interface IRequestContext<T> {
  requestId: string;
  status: RequestStatus;

  config: AxiosRequestConfig;

  response: (value: AxiosResponse<T>) => void;
  error: (reason?: any) => void;
}
