import { AppDataSource } from "../../db/data-source";
import { UserRequestDTO } from "../request/UserRequestDTO";
import { UserResponseDTO } from "../response/UserResponseDTO";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    private userRepository = new UserRepository(AppDataSource);

    public async createUser(body: UserRequestDTO): Promise<UserResponseDTO> {
        const createdResp = await this.userRepository.createNewUser(body);
        return createdResp;
    }

    public async getAllUsers(): Promise<UserResponseDTO[]> {
        const fetchUsersResp = await this.userRepository.fetchAllUsers();
        return fetchUsersResp;
    }

    public async getUserById(userId: string): Promise<UserResponseDTO | null> {
        const fetchUserDetailsResp = await this.userRepository.fetchUserById(userId);
        return fetchUserDetailsResp;
    }

    public async updateUser(userId: string, body: UserRequestDTO): Promise<UserResponseDTO> {
        const updatedResp = await this.userRepository.updateUser(userId, body);
        return updatedResp;
    }

    public async deleteUserById(userId: string): Promise<UserResponseDTO | null> {
        const deletedUserResp = await this.userRepository.deleteUserById(userId);
        return deletedUserResp;
    }
}