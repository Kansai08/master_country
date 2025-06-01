import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('User')
@ApiBearerAuth('access-token')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: RegisterUserDto) {
    return this.userService.register(body.username, body.email, body.password, body.country);
  }

  @Post('login')
  async login(@Body() body: LoginUserDto) {
    return this.userService.login(body.email, body.password);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}
