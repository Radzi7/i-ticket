import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CostumerAddress } from './costumer_address.model';
import { CreateCostumerAddressDto } from './dto/create-costumer_address.dto';
import { UpdateCostumerAddressDto } from './dto/update-costumer_address.dto';

@Injectable()
export class CostumerAddressService {
  constructor(@InjectModel(CostumerAddress) private costumerAddressRepository: typeof CostumerAddress,) {}

  async create(createCostumerAddressDto: CreateCostumerAddressDto) {
    const data = await this.costumerAddressRepository.create(
      createCostumerAddressDto,
    );
    return data;
  }

  async findAll() {
    const data = await this.costumerAddressRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.costumerAddressRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateCostumerAddressDto) {
    const edited = await this.costumerAddressRepository.update(data, {where: { id } });
    if (!data) {
      throw new HttpException('Costumer_Address is not exists',HttpStatus.NOT_FOUND,);
    }
    return { message: 'Costumer_Address is updated' };
  }

  async remove(id: number) {
    const data = await this.costumerAddressRepository.destroy({
      where: { id },
    });
    if (!data) {
      throw new HttpException('Costumer_Address is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Costumer_Address is deleted' };
  }
}
