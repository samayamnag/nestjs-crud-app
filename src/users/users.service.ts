import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { RegisterDTO } from './register.dto';
import { LoginDTO } from '../auth/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async findAll(): Promise<User[]> {
        return this.userModel.find();
    }

    async create(registerDto: RegisterDTO): Promise<User> {
        const { email, password } = registerDto;
        const user = await this.userModel.findOne({ email });
        if (user) {
            throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new this.userModel({ email, password: hashedPassword });
        await newUser.save();
        return this.serializeUser(newUser);
    }

    async findByLogin(loginDTO: LoginDTO) {
        const { email, password } = loginDTO;
        const user = await this.userModel.findOne({ email }).select('email password');

        if (!user) {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

        if (await bcrypt.compare(password, user.password)) {
            return this.serializeUser(user);
        } else {
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }

    }

    async findByPayload(payload: any): Promise<User> {
        const { email } = payload;
        return await this.userModel.findOne({ email });
    }

    serializeUser(user: User): User {
        const userObj = user.toObject();
        delete userObj.password;
        return userObj;
    }
}
