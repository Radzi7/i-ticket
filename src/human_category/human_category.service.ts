import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateHumanCategoryDto } from './dto/create-human_category.dto';
import { UpdateHumanCategoryDto } from './dto/update-human_category.dto';
import { HumanCategory } from './human_category.model';

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(HumanCategory)
    private humanCategoryRepository: typeof HumanCategory,
  ) {}

  async create(createEventsDto: CreateHumanCategoryDto) {
    const data = await this.humanCategoryRepository.create(createEventsDto);
    return data;
  }

  async findAll() {
    const data = await this.humanCategoryRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.humanCategoryRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateHumanCategoryDto) {
    const edited = await this.humanCategoryRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Human_category is not exists', HttpStatus.NOT_FOUND,);
    }
    return { message: 'Human_category is updated' };
  }

  async remove(id: number) {
    const data = await this.humanCategoryRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Human_category is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Human_category is deleted' };
  }
}
