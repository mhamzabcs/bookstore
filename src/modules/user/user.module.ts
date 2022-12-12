import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

import { usersProviders } from './user.providers';

@Module({
  imports: [],
  providers: [UserService, ...usersProviders],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
