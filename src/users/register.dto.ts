import { IsEmail, MinLength, MaxLength } from 'class-validator';

export class RegisterDTO {
    @IsEmail()
    email: string;

    @MinLength(8, { message: 'Password is too short (8 characters min)' })
    @MaxLength(20, { message: 'Password is too long (20 characters max)' })
    password: string;
}