import { Repository, DataSource } from 'typeorm';
import { ObjectId } from 'mongodb';

import { User } from '../models/User';
import { UserRequestDTO } from '../request/UserRequestDTO';
import { UserResponseDTO } from '../response/UserResponseDTO';

export class UserRepository extends Repository<User> {
    constructor(dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    public async createNewUser(data: UserRequestDTO): Promise<UserResponseDTO> {
        return await this.save(data);
    }

    public async fetchAllUsers(): Promise<UserResponseDTO[]> {
        return await this.find();
    }

    public async fetchUserById(userId: string): Promise<any | null> {
        return await this.findOneBy({ _id: new ObjectId(userId) });
    }

    public async updateUser(userId: string, data: UserRequestDTO): Promise<any> {
        return await this.update({ _id: new ObjectId(userId) }, data);
    }

    public async deleteUserById(userId: string): Promise<any | null> {
        return await this.delete({ _id: new ObjectId(userId) });
    }
}