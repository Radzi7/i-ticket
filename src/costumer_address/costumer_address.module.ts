import { Module } from '@nestjs/common';
import { CostumerAddressService } from './costumer_address.service';
import { CostumerAddressController } from './costumer_address.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CostumerAddress } from './costumer_address.model';

@Module({
  imports: [SequelizeModule.forFeature([CostumerAddress])],
  controllers: [CostumerAddressController],
  providers: [CostumerAddressService],
  exports: [CostumerAddressService],
})
export class CostumerAddressModule {}
