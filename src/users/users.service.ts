import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<UsersDocument>
) { }

  async createUser(createUserDto: CreateUserInput): Promise<Users> {
    const createdUser = new this.usersModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }

  async findOne(id: string): Promise<Users> {
    return await this.usersModel.findOne({ where: { id: id } });  
   }

  async update(id: string, updateUserDto: UpdateUserInput) {
    const ID = { _id: id };
    await this.usersModel.updateOne(ID, updateUserDto);
  }

  async remove(id: string) {
    const ID  = { _id: id };
    await this.usersModel.deleteOne(ID);
  }

}
