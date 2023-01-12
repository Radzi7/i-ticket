import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './gender.model';

@Injectable()
export class GenderService {
  constructor(@InjectModel(Gender) private genderRepository: typeof Gender) {}

  async create(createSeatTypeDto: CreateGenderDto) {
    const data = await this.genderRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.genderRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.genderRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateGenderDto) {
    const edited = await this.genderRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Gender is exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Gender is updated' };
  }

  async remove(id: number) {
    const data = await this.genderRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Gender is exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Gender is deleted' };
  }
}
