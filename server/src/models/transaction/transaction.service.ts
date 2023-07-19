import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { UpdateTransactionDTO } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(data: CreateTransactionDTO) {
    return this.prismaService.transaction.create({
      data,
    });
  }

  async list() {
    return await this.prismaService.transaction.findMany({
      orderBy: [
        {
          date: 'desc',
        },
      ],
    });
  }

  async show(id: string) {
    await this.exists(id);
    return await this.prismaService.transaction.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    {
      amount,
      type,
      category,
      date,
      description,
      paymentMethod,
    }: UpdateTransactionDTO,
  ) {
    await this.exists(id);
    return await this.prismaService.transaction.update({
      data: {
        amount,
        type,
        category,
        date,
        description,
        paymentMethod,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    await this.exists(id);
    await this.prismaService.transaction.delete({
      where: {
        id,
      },
    });
    return true;
  }

  async exists(id: string) {
    if (
      !(await this.prismaService.transaction.findFirst({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException('Transaction not Found');
    }
  }
}
