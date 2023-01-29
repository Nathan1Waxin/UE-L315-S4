import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;


@Schema()
export class Users {
  @Prop({ required: true })
  firstname: string;

  @Prop()
  lastname: string;

  @Prop({ unique: true })
  public email: string;

  @Prop({ required: true })
  public password: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);