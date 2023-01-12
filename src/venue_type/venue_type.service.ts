import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { VenueType } from './venue_type.model';

@Injectable()
export class VenueTypeService {
  constructor(
    @InjectModel(VenueType) private venueTypeRepository: typeof VenueType,
  ) {}

  async create(createSeatTypeDto: CreateVenueTypeDto) {
    const data = await this.venueTypeRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.venueTypeRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.venueTypeRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateVenueTypeDto) {
    const edited = await this.venueTypeRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Venue_type is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Venue_type is updated' };
  }

  async remove(id: number) {
    const data = await this.venueTypeRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Venue_type is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Venue_type is deleted' };
  }
}
