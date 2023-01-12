import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './country.model';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private coutryRepository: typeof Country) {}

  async create(createCostumerAddressDto: CreateCountryDto) {
    const data = await this.coutryRepository.create(createCostumerAddressDto);
    return data;
  }

  async findAll() {
    const data = await this.coutryRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.coutryRepository.findOne({
      where: { id },
    });
    return data;
  }

  async update(id: number, data: UpdateCountryDto) {
    const edited = await this.coutryRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Country is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Country is updated' };
  }

  async remove(id: number) {
    const data = await this.coutryRepository.destroy({
      where: { id },
    });
    if (!data) {
      throw new HttpException('Country is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Country is deleted' };
  }
}
