import { Module } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { EventTypeController } from './event_type.controller';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventType } from './event_type.model';

@Module({
  imports:[SequelizeModule.forFeature([EventType])],
  controllers: [EventTypeController],
  providers: [EventTypeService],
  exports:[EventTypeService]
})
export class EventTypeModule {}
