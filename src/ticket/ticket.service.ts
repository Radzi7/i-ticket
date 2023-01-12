import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './ticket.model';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketRepository: typeof Ticket) {}

  async create(createSeatTypeDto: CreateTicketDto) {
    const data = await this.ticketRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.ticketRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.ticketRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateTicketDto) {
    const edited = await this.ticketRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Ticket is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Ticket is updated' };
  }

  async remove(id: number) {
    const data = await this.ticketRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Ticket is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Ticket is deleted' };
  }
}
