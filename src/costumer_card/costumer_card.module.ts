import { Module } from '@nestjs/common';
import { CostumerCardService } from './costumer_card.service';
import { CostumerCardController } from './costumer_card.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CostumerCard } from './costumer_card.model';

@Module({
  imports: [SequelizeModule.forFeature([CostumerCard])],
  controllers: [CostumerCardController],
  providers: [CostumerCardService],
  exports: [CostumerCardService],
})
export class CostumerCardModule {}
