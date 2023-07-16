import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './models/transaction/transction.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './shared/prisma.service';

@Module({
  imports: [TransactionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
