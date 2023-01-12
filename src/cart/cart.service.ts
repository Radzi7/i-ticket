import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from './cart.model';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart) private cartRepository: typeof Cart) {}

  async create(createCartDto: CreateCartDto) {
    const newCard = await this.cartRepository.create(createCartDto);
    return newCard;
  }

  async findAll() {
    const data = await this.cartRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.cartRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateCartDto) {
    const newCard = await this.cartRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Cart is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Cart is updated' };
  }

  async remove(id: number) {
    const data = await this.cartRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Cart is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Cart is deleted' };
  }
}
