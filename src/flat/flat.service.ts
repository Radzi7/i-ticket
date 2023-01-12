import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFlatDto } from './dto/create-flat.dto';
import { UpdateFlatDto } from './dto/update-flat.dto';
import { Flat } from './flat.model';

@Injectable()
export class FlatService {
  constructor(@InjectModel(Flat) private flatRepository: typeof Flat) {}

  async create(createSeatTypeDto: CreateFlatDto) {
    const data = await this.flatRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.flatRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.flatRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateFlatDto) {
    const edited = await this.flatRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Flat is exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Flat is updated' };
  }

  async remove(id: number) {
    const data = await this.flatRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Flat is exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Flat is deleted' };
  }
}
