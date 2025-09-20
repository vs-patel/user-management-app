import { Repository } from 'typeorm';
import { ObjectId } from 'mongodb';

import { User } from '../models/User';
import { UserRequestDTO } from '../request/UserRequestDTO';
import { UserResponseDTO } from '../response/UserResponseDTO';
import { dataSource } from '../../db/data-source';

class UserRepository extends Repository<User> {
  public async createNewUser(data: UserRequestDTO): Promise<UserResponseDTO> {
    const newUser = this.create(data);
    return await this.save(newUser);
  }

  public async fetchAllUsers(): Promise<UserResponseDTO[]> {
    return await this.find({
      select: [
        'firstName',
        'lastName',
        'email',
        'age',
        'createdAt',
        'updatedAt',
      ],
    });
  }

  public async fetchUserById(userId: string): Promise<any | null> {
    return await this.findOne({
      select: [
        'firstName',
        'lastName',
        'email',
        'age',
        'createdAt',
        'updatedAt',
      ],
      where: { _id: new ObjectId(userId) },
    });
  }

  public async updateUser(userId: string, data: UserRequestDTO): Promise<any> {
    return await this.update({ _id: new ObjectId(userId) }, data);
  }

  public async deleteUserById(userId: string): Promise<any> {
    return await this.delete({ _id: new ObjectId(userId) });
  }
}

export default new UserRepository(User, dataSource.manager);
