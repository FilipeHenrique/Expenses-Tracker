import { IsNumber, IsString, IsDateString } from 'class-validator';

export class CreateTransactionDTO {
  @IsNumber()
  amount: number;

  @IsString()
  type: string;

  @IsString()
  category: string;

  @IsString()
  paymentMethod: string;

  @IsDateString()
  date: string;

  @IsString()
  description: string;

  @IsString()
  userId: string;
}
