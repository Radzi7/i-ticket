import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { Status } from './status.model';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepository: typeof Status) {}

  async create(createSeatTypeDto: CreateStatusDto) {
    const data = await this.statusRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.statusRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.statusRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateStatusDto) {
    const edited = await this.statusRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Status is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Status is updated' };
  }

  async remove(id: number) {
    const data = await this.statusRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Status is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Status is deleted' };
  }
}
