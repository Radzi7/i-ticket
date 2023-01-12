import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostumerAddressService } from './costumer_address.service';
import { CreateCostumerAddressDto } from './dto/create-costumer_address.dto';
import { UpdateCostumerAddressDto } from './dto/update-costumer_address.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Sotib oluvchi manzili')
@Controller('costumer_address')
export class CostumerAddressController {
  constructor(
    private readonly costumerAddressService: CostumerAddressService,
  ) {}

  @Post()
  create(@Body() createCostumerAddressDto: CreateCostumerAddressDto) {
    return this.costumerAddressService.create(createCostumerAddressDto);
  }

  @Get()
  findAll() {
    return this.costumerAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costumerAddressService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCostumerAddressDto: UpdateCostumerAddressDto,
  ) {
    return this.costumerAddressService.update(+id, updateCostumerAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costumerAddressService.remove(+id);
  }
}
