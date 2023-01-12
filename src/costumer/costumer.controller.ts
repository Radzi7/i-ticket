import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Costumer } from './costumer.model';
import { customerLogin } from './dto/customerLogin.dto';
import { signinDto } from './dto/signinCustomer.dto';
import { JwtAdminGuard } from 'src/guards/admin.guard';

@ApiTags('Sotib oluvchi')
@Controller('costumer')
export class CostumerController {
  constructor(private readonly costumerService: CostumerService) {}

  @Post('registration')
  async signup(@Body() customerLogin: customerLogin) {
    return this.costumerService.registration(customerLogin);
  }

  @Post('signin')
  async signin(@Body() signinDto: signinDto) {
    return this.costumerService.signin(signinDto);
  }
  @ApiOperation({ summary: "Yangi costumer qo'shish" })
  @ApiResponse({ status: 201, type: Costumer })
  @Post()
  create(@Body() createCostumerDto: CreateCostumerDto) {
    return this.costumerService.create(createCostumerDto);
  }

  @ApiOperation({ summary: 'Find all costumers' })
  @ApiResponse({ status: 201, type: Costumer })
  @UseGuards(JwtAdminGuard)
  @Get()
  findAll() {
    return this.costumerService.findAll();
  }

  @ApiOperation({ summary: 'Find costumer by id' })
  @ApiResponse({ status: 201, type: Costumer })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costumerService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update costumer by id' })
  @ApiResponse({ status: 201, type: Costumer })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCostumerDto: UpdateCostumerDto,
  ) {
    return this.costumerService.update(+id, updateCostumerDto);
  }

  @ApiOperation({ summary: 'Delete costumer by id' })
  @ApiResponse({ status: 201, type: Costumer })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costumerService.remove(+id);
  }
}
