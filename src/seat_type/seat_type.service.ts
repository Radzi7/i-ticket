import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { SeatType } from './seat_type.model';

@Injectable()
export class SeatTypeService {
  constructor(@InjectModel(SeatType) private seatTypeRepository: typeof SeatType) {}

  async create(createSeatTypeDto: CreateSeatTypeDto) {
    const data = await this.seatTypeRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.seatTypeRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.seatTypeRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateSeatTypeDto) {
    const edited = await this.seatTypeRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Seat_type is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Seat_type is updated' };
  }

  async remove(id: number) {
    const data = await this.seatTypeRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Seat_type is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Seat_type is deleted' };
  }
}
