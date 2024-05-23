import { Controller, Headers, NotFoundException, Post } from '@nestjs/common';
import { ApiConfigService } from '../infrastructure/config/api-config.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly config: ApiConfigService) {}

  @Post('start/task')
  async startProcessorTask(@Headers('key') key: string) {
    if (this.config.mainControlHeaderKey !== key) {
      throw new NotFoundException();
    }
    // this.control.startProcessor();
  }
}
