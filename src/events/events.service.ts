import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Events } from './events.model';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Events) private eventsRepository: typeof Events) {}

  async create(createEventsDto: CreateEventDto) {
    const data = await this.eventsRepository.create(createEventsDto);
    return data;
  }

  async findAll() {
    const data = await this.eventsRepository.findAll({include: { all: true }});
    return data;
  }

  async findOne(id: number) {
    const data = await this.eventsRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateEventDto) {
    const edited = await this.eventsRepository.update(data, { where: { id } });
    if (!data) {
      throw new HttpException('Event is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Event is updated' };
  }

  async remove(id: number) {
    const data = await this.eventsRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Event_type is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Event is deleted' };
  }
}
