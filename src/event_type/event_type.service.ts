import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { EventType } from './event_type.model';

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel(EventType) private eventTypeRepository: typeof EventType,
  ) {}

  async create(createEventTypeDto: CreateEventTypeDto) {
    const data = await this.eventTypeRepository.create(createEventTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.eventTypeRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.eventTypeRepository.findOne({
      where: { id },
    });
    return data;
  }

  async update(id: number, data: UpdateEventTypeDto) {
    const edited = await this.eventTypeRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException(
        'Event_type is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Event_type is updated' };
  }

  async remove(id: number) {
    const data = await this.eventTypeRepository.destroy({
      where: { id },
    });
    if (!data) {
      throw new HttpException('Event_type is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Event_type is deleted' };
  }
}
