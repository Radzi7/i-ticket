import { Module } from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { HumanCategoryController } from './human_category.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { HumanCategory } from './human_category.model';

@Module({imports:[SequelizeModule.forFeature([HumanCategory])],
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
  exports:[HumanCategoryService]
})
export class HumanCategoryModule {}
