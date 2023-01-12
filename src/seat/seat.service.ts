import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './seat.model';

@Injectable()
export class SeatService {
  constructor(@InjectModel(Seat) private seatRepository: typeof Seat) {}

  async create(createSeatDto: CreateSeatDto) {
    const data = await this.seatRepository.create(createSeatDto);
    return data;
  }

  async findAll() {
    const data = await this.seatRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.seatRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateSeatDto) {
    const edited = await this.seatRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException(
        'Seat is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Seat is updated' };
  }

  async remove(id: number) {
    const data = await this.seatRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Seat is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Seat is deleted' };
  }
}
