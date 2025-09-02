import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(id: string): Promise<User | null> {
        return this.userModel.findById(id).populate(['wishlists', 'myCars', 'bids']).exec();
    }

    async update(id: string, updateUserDto: Partial<User>): Promise<User | null> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }
}
