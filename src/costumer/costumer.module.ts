import { Module } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import { CostumerController } from './costumer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Costumer } from './costumer.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Costumer]), JwtModule],
  controllers: [CostumerController],
  providers: [CostumerService],
  exports: [CostumerService],
})
export class CostumerModule {}
