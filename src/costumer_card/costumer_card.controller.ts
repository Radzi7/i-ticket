import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostumerCardService } from './costumer_card.service';
import { CreateCostumerCardDto } from './dto/create-costumer_card.dto';
import { UpdateCostumerCardDto } from './dto/update-costumer_card.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Sotib oluvchi kredit-kartalari')
@Controller('costumer-card')
export class CostumerCardController {
  constructor(private readonly costumerCardService: CostumerCardService) {}

  @Post()
  create(@Body() createCostumerCardDto: CreateCostumerCardDto) {
    return this.costumerCardService.create(createCostumerCardDto);
  }

  @Get()
  findAll() {
    return this.costumerCardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costumerCardService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCostumerCardDto: UpdateCostumerCardDto,
  ) {
    return this.costumerCardService.update(+id, updateCostumerCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costumerCardService.remove(+id);
  }
}
