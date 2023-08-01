import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../models/user/dto/create-user.dto';
import { UserService } from '../models/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private issuer = 'login';
  private audience = 'users';
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  async login(data: CreateUserDTO) {
    let user = await this.userService.show(data.email);
    if (!user) {
      user = await this.userService.create(data);
    }
    const payload = { sub: data.email, username: data.name, userId: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '7 days',
        issuer: this.issuer,
        audience: this.audience,
      }),
    };
  }
}
