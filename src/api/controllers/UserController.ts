import 'reflect-metadata';
import { Body, Get, Post, JsonController, Req, Res, Delete, Put, Param } from 'routing-controllers';

import { UserService } from '../services/UserService';
import { UserRequestDTO } from '../request/UserRequestDTO';
import { UserResponseDTO } from '../response/UserResponseDTO';

@JsonController('/users')
export class UserController {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Post('/')
  public async createUser(@Req() req: any, @Res() resp: any, @Body() user: UserRequestDTO): Promise<UserResponseDTO> {
    const result: UserResponseDTO = await this.userService.createUser(user);
    return resp.status(201).json({ message: 'User created successfully', data: result });
  }

  @Get('/')
  public async getAllUsers(@Req() req: any, @Res() resp: any): Promise<UserResponseDTO[]> {
    const result: UserResponseDTO[] = await this.userService.getAllUsers();
    return resp.status(200).json({ message: 'Users List', data: result });
  }

  @Get('/:id')
  public async getUserById(@Param("id") userId: string, @Res() resp: any): Promise<UserResponseDTO | null> {
    const result: UserResponseDTO | null = await this.userService.getUserById(userId);
    return resp.status(200).json({ message: 'User Details', data: result });
  }

  @Put('/:id')
  public async updateUser(@Param("id") userId: string, @Req() req: any, @Res() resp: any, @Body() user: UserRequestDTO): Promise<UserResponseDTO> {
    const result: UserResponseDTO = await this.userService.updateUser(userId, user);
    return resp.status(200).json({ message: 'User updated successfully', data: result });
  }

  @Delete('/:id')
  public async deleteUserById(@Param("id") userId: string, @Res() resp: any): Promise<UserResponseDTO | null> {
    const result: UserResponseDTO | null = await this.userService.deleteUserById(userId);
    return resp.status(200).json({ message: 'User Deleted successfully', data: result });
  }

}