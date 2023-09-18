import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerRewardsModule } from './customer-rewards/customer-rewards.module';

@Module({
  imports: [CustomerRewardsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
