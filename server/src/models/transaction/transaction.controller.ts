import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async create(@Body() data: CreateTransactionDTO) {
    return this.transactionService.create(data);
  }

  @Get()
  async findAll() {
    return this.transactionService.list();
  }

  @Get(':id')
  async readOne() {
    return;
  }
}
