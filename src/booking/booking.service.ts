import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Booking } from './booking.model';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking) private bookingRepository: typeof Booking,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const newBooking = await this.bookingRepository.create(createBookingDto);
    return newBooking;
  }

  async findAll() {
    const data = await this.bookingRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.bookingRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateBookingDto) {
    const newBooking = await this.bookingRepository.update(data, { where: { id } });
    if (!data) {
      throw new HttpException('Booking is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Booking is updated' };
  }

  async remove(id: number) {
    const data = await this.bookingRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Booking is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Booking is deleted' };
  }
}
