import { Injectable } from '@nestjs/common';

import { CurrentUserService } from './current-user.service';

@Injectable()
export class UsersService {
  constructor(private readonly currentUserService: CurrentUserService) {}
}
