import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './district.model';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District) private districtRepository: typeof District,
  ) {}

  async create(createSeatTypeDto: CreateDistrictDto) {
    const data = await this.districtRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.districtRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.districtRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateDistrictDto) {
    const edited = await this.districtRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('District is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'District is updated' };
  }

  async remove(id: number) {
    const data = await this.districtRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('District is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'District is deleted' };
  }
}
