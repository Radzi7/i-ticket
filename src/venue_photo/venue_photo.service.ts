import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { VenuePhoto } from './venue_photo.model';

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private venuePhotoRepository: typeof VenuePhoto,
  ) {}

  async create(createSeatTypeDto: CreateVenuePhotoDto) {
    const data = await this.venuePhotoRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.venuePhotoRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.venuePhotoRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateVenuePhotoDto) {
    const edited = await this.venuePhotoRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException(
        'Venue_photo is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Venue_photo is updated' };
  }

  async remove(id: number) {
    const data = await this.venuePhotoRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException(
        'Venue_photo is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Venue_photo is deleted' };
  }
}
