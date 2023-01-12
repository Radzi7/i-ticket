import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CostumerCard } from './costumer_card.model';
import { CreateCostumerCardDto } from './dto/create-costumer_card.dto';
import { UpdateCostumerCardDto } from './dto/update-costumer_card.dto';

@Injectable()
export class CostumerCardService {
  constructor(
    @InjectModel(CostumerCard)
    private costumerCardRepository: typeof CostumerCard,
  ) {}

  async create(createCostumerCardDto: CreateCostumerCardDto) {
    const data = await this.costumerCardRepository.create(createCostumerCardDto);
    return data;
  }

  async findAll() {
    const data = await this.costumerCardRepository.findAll({
      include: { all: true },
    });
    return data;
  }

  async findOne(id: number) {
    const data = await this.costumerCardRepository.findOne({
      where: { id },
    });
    return data;
  }

  async update(id: number, data: UpdateCostumerCardDto) {
    const edited = await this.costumerCardRepository.update(data, {
      where: { id },
    });
    if (!data) {
      throw new HttpException(
        'Costumer_Card is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Costumer_Card is updated' };
  }

  async remove(id: number) {
    const data = await this.costumerCardRepository.destroy({
      where: { id },
    });
    if (!data) {
      throw new HttpException(
        'Costumer_Card is not exists',
        HttpStatus.NOT_FOUND,
      );
    }
    return { message: 'Costumer_Card is deleted' };
  }
}
