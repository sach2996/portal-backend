import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

@Schema()
export class User extends Document implements User {
  @Prop()
  username: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
