import { UserService } from '../services/UserService';

import 'reflect-metadata';
import { Param, Body, Get, Post, Put, Delete, JsonController, Req, Res } from 'routing-controllers';
import { UserRequestDTO } from '../request/UserRequestDTO';
import { UserResponseDTO } from '../response/UserResponseDTO';

@JsonController('/users')
export class UserController {
  constructor(private userService: UserService) {
    this.userService = new UserService();
  }

  @Get('/')
  getAll() {
    return 'This action returns all users';
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns user #' + id;
  }

  @Post('/')
  async createUser(@Req() req: any, @Res() resp: any, @Body() user: UserRequestDTO): Promise<UserResponseDTO> {
    const result: UserResponseDTO = await this.userService.createUser(user);
    return resp.status(201).json({ message: 'User created', data: result });
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: any) {
    return 'Updating a user...';
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    return 'Removing user...';
  }
}