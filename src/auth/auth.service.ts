import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

import { UsersService } from '../users/users.service';
import { User } from '../users/schemas/user.schema';
import { SignInPayload } from './signin_payload.types';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private configService: ConfigService,
    ) { }

    async signInPayload(payload: any) {
        return sign(payload, this.configService.get('jwt.secret'), { expiresIn: this.configService.get('jwt.expiresIn') })
    }

    async validateUser(payload: SignInPayload): Promise<User> {
        return this.userService.findByPayload(payload);
    }

}
