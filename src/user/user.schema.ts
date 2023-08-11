import { Document, Schema } from 'mongoose';

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserDocument extends User, Document {}

export const UserSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
