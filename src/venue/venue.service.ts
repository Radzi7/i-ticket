import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { Venue } from './venue.model';

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private venueRepository: typeof Venue) {}

  async create(createSeatTypeDto: CreateVenueDto) {
    const data = await this.venueRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.venueRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.venueRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateVenueDto) {
    const edited = await this.venueRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Venue is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Venue is updated' };
  }

  async remove(id: number) {
    const data = await this.venueRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Venue is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Venue is deleted' };
  }
}
