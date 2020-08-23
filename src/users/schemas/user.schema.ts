import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {

    @Prop({
        type: String,
        unique: true
    })
    email: string;

    @Prop()
    password: string;

    @Prop({ default: Date.now})
    created_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);