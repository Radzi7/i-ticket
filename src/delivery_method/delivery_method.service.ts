import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DeliveryMethod } from './delivery_method.model';
import { CreateDeliveryMethodDto } from './dto/create-delivery_method.dto';
import { UpdateDeliveryMethodDto } from './dto/update-delivery_method.dto';

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectModel(DeliveryMethod)
    private deliveryMethodRepository: typeof DeliveryMethod,
  ) {}

  async create(createEventsDto: CreateDeliveryMethodDto) {
    const data = await this.deliveryMethodRepository.create(createEventsDto);
    return data;
  }

  async findAll() {
    const data = await this.deliveryMethodRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.deliveryMethodRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateDeliveryMethodDto) {
    const edited = await this.deliveryMethodRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException(
        'Delivery_method is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Delivery_method is updated' };
  }

  async remove(id: number) {
    const data = await this.deliveryMethodRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException(
        'Delivery_method is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Delivery_method is deleted' };
  }
}
