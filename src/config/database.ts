import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('database', () => ({
    mysql: {
        name: 'default',
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DB,
        synchronize: true,
        dropSchema: false,
        logging: true,
        entities: ['dist/**/*.entity.js'],
    },
    mongo: {
        uri: process.env.MONGO_URI
    }
}));