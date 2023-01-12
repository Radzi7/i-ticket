import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './language.model';

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language) private languageRepository: typeof Language,
  ) {}

  async create(createSeatTypeDto: CreateLanguageDto) {
    const data = await this.languageRepository.create(createSeatTypeDto);
    return data;
  }

  async findAll() {
    const data = await this.languageRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.languageRepository.findOne({ where: { id } });
    return data;
  }

  async update(id: number, data: UpdateLanguageDto) {
    const edited = await this.languageRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException('Language is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Language is updated' };
  }

  async remove(id: number) {
    const data = await this.languageRepository.destroy({ where: { id } });
    if (!data) {
      throw new HttpException('Language is not exists', HttpStatus.NOT_FOUND);
    }
    return { message: 'Language is deleted' };
  }
}
