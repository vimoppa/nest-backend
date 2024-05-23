import { Controller, Headers, NotFoundException, Post } from '@nestjs/common';

import { ConfigurationService } from '../services/configuration.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly config: ConfigurationService) {}

  @Post('start/task')
  async startProcessorTask(@Headers('key') key: string) {
    if (this.config.mainControlHeaderKey !== key) {
      throw new NotFoundException();
    }
    // this.control.startProcessor();
  }
}
