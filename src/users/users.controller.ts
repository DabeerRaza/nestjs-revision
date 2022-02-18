import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUser(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    // TODO: auto parse ID
    return this.usersService.findById(Number(id));
  }

  @Post()
  createNewUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
