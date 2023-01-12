import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { TicketType } from './ticket_type.model';

@Injectable()
export class TicketTypeService {
  constructor(@InjectModel(TicketType) private tickettypeRepository: typeof TicketType) {}
  async create(createSeatTypeDto: CreateTicketTypeDto) {
    const data = await this.tickettypeRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.tickettypeRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.tickettypeRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateTicketTypeDto) {
    const edited = await this.tickettypeRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException(
        'Ticket_type is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Ticket_type is updated' };
  }

  async remove(id: number) {
    const data = await this.tickettypeRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException(
        'Ticket_type is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Ticket_type is deleted' };
  }
}
