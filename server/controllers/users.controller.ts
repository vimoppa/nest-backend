import { Controller, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../libs/middlewares/guards/auth.guard';
import { UsersService } from '../services/users.service';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
