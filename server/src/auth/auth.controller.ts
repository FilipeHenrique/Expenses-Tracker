import { Controller, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../models/user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  async login(@Body() data: CreateUserDTO) {
    return this.authService.login(data);
  }
}
