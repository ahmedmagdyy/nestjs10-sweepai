import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async findAll(): Promise<User[]> {
    try {
      return this.userModel.find().exec();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      return this.userModel.findById(id).exec();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async create(user: User): Promise<User> {
    try {
      const newUser = new this.userModel(user);
      return newUser.save();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(id: string, user: User): Promise<User> {
    try {
      return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async delete(id: string): Promise<User> {
    try {
      return this.userModel.findByIdAndDelete(id).exec();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}