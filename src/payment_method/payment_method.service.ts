import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { PaymentMethod } from './payment_method.model';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod)
    private paymentMethodRepository: typeof PaymentMethod,
  ) {}

  async create(createEventsDto: CreatePaymentMethodDto) {
    const data = await this.paymentMethodRepository.create(createEventsDto);
    return data;
  }

  async findAll() {
    const data = await this.paymentMethodRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.paymentMethodRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdatePaymentMethodDto) {
    const edited = await this.paymentMethodRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException(
        'Payment_method is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Payment_method is updated' };
  }

  async remove(id: number) {
    const data = await this.paymentMethodRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException(
        'Payment_method is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Payment_method is deleted' };
  }
}
