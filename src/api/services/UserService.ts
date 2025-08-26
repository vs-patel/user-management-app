import { AppDataSource } from "../../db/data-source";
import { User } from "../models/User";
import { UserRequestDTO } from "../request/UserRequestDTO";
import { UserResponseDTO } from "../response/UserResponseDTO";

export class UserService {
    async createUser(body: UserRequestDTO): Promise<UserResponseDTO> {
        const userRepository = AppDataSource.getRepository(User);
        const newUser = userRepository.create(body);
        await userRepository.save(newUser);
        return body;
    }
}