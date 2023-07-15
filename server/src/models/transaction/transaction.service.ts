import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateTransactionDTO) {
    return this.prisma.transaction.create({
      data,
    });
  }
  async list() {
    return await this.prisma.transaction.findMany();
  }
}
