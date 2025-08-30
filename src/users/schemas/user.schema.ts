import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ required: true, unique: true }) // unique mobile number
  mobileNo: string;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  idType: string;

  @Prop({ required: true, unique: true }) // unique ID number
  idNo: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Auction' }], default: [] })
  wishlists: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Auction' }], default: [] })
  myCars: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Auction' }], default: [] })
  bids: Types.ObjectId[];
}


export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
