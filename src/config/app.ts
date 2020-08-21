import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
    name: process.env.APP_NAME || 'Example app',
    port: Number(process.env.PORT) || 3000,
}));