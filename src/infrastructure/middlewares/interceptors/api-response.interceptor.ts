import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IApiResponse } from '../../../services/interfaces/http/response.interface';

@Injectable()
export class ApiResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<IApiResponse<any>> {
    const http = context.switchToHttp();
    const response = http.getResponse();

    return next.handle().pipe(
      map((responseData) => {
        const mappedResponse: IApiResponse<typeof responseData> = {
          status: response.statusCode,
          data: responseData,
          error: [''],
        };
        return mappedResponse;
      }),
    );
  }
}
