import { Injectable, Body, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(@Body() data: CreateUserDTO) {
    return await this.prismaService.user.create({
      data,
    });
  }

  async show(email: string) {
    return await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  async delete(id: string) {
    await this.exists(id);
    await this.prismaService.user.delete({
      where: {
        id,
      },
    });
    return true;
  }

  async exists(id: string) {
    if (
      !(await this.prismaService.user.findFirst({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException('User not Found');
    }
  }
}
