import { Document, Schema } from 'mongoose';
import * as bcrypt from 'bcrypt';

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

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});