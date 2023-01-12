import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ticket } from './ticket.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Ticket]),JwtModule],
  controllers: [TicketController],
  providers: [TicketService],
  exports:[TicketService]
})
export class TicketModule {}
