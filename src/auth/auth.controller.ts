import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginDTO } from './login.dto';
import { RegisterDTO } from '../users/register.dto';
import { User } from '../users/schemas/user.schema';

@Controller('auth')
export class AuthController {
    constructor(private userService: UsersService){}

    @Post('login')
    login(@Body() loginDto: LoginDTO): Promise<User> {
        return this.userService.findByLogin(loginDto);
    }

    @Post('register')
    async register(@Body() registerDTO: RegisterDTO): Promise<User> {
        return this.userService.crete(registerDTO);
    }
}
