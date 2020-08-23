import { Controller, Get, UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';
import { User as UserModel } from './schemas/user.schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';


@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService
    ){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async index(): Promise<UserModel[]> {
        return this.userService.findAll();
    }
}
