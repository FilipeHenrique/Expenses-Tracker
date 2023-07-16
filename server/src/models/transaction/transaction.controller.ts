import {
  Body,
  Param,
  Controller,
  Get,
  Put,
  Post,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';
import { UpdateTransactionDTO } from './dto/update-transaction.dto';
import { AuthGuard } from '../../common/guards/auth.guard';

@UseGuards(AuthGuard)
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
  async readOne(@Param('id') id: string) {
    return this.transactionService.show(id);
  }

  @Put(':id')
  async update(@Body() data: UpdateTransactionDTO, @Param('id') id: string) {
    return this.transactionService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.transactionService.delete(id);
  }
}
