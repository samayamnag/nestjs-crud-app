import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt-auth.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule
  ],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule { }
