import { Controller, Post, Body, Get, UseGuards, ValidationPipe, Request } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDTO } from './login.dto';
import { RegisterDTO } from '../users/register.dto';
import { AuthService } from './auth.service';

import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UsersService) { }


    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMe(@Request() req) {
        return req.user;
    }

    @Post('login')
    async login(@Body() loginDto: LoginDTO): Promise<any> {
        const user = await this.userService.findByLogin(loginDto);
        const payload = {
            email: user.email,
        }
        const token = await this.authService.signInPayload(payload);
        return { user, token }
    }

    @Post('register')
    async register(@Body(ValidationPipe) registerDTO: RegisterDTO): Promise<any> {
        const user = await this.userService.create(registerDTO);
        const payload = { email: user.email };
        const token = await this.authService.signInPayload(payload);
        return { user, token }
    }
    
}
