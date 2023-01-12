import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './region.model';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepository: typeof Region) {}

  async create(createSeatTypeDto: CreateRegionDto) {
    const data = await this.regionRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.regionRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.regionRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateRegionDto) {
    const edited = await this.regionRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Region is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Region is updated' };
  }

  async remove(id: number) {
    const data = await this.regionRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Region is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Region is deleted' };
  }
}
