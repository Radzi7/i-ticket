import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DiscountCoupon } from './discount_coupon.model';
import { CreateDiscountCouponDto } from './dto/create-discount_coupon.dto';
import { UpdateDiscountCouponDto } from './dto/update-discount_coupon.dto';

@Injectable()
export class DiscountCouponService {
  constructor(
    @InjectModel(DiscountCoupon)
    private discountRepository: typeof DiscountCoupon,
  ) {}

  async create(createSeatTypeDto: CreateDiscountCouponDto) {
    const data = await this.discountRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.discountRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.discountRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateDiscountCouponDto) {
    const edited = await this.discountRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException(
        'Discount_Coupon is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Discount_Coupon is updated' };
  }

  async remove(id: number) {
    const data = await this.discountRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException(
        'Discount_Coupon is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Discount_Coupon is deleted' };
  }
}
