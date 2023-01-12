import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cart } from './cart.model';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtCostumerGuard } from 'src/guards/costumer.guard';

@ApiTags('Savatcha')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: 'Create new cart' })
  @ApiResponse({ status: 201, type: Cart })
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({ summary: 'Find all carts' })
  @ApiResponse({ status: 201, type: Cart })
  @UseGuards(JwtCostumerGuard)
  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({ summary: 'Find cart by ID' })
  @ApiResponse({ status: 201, type: Cart })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update cart by ID' })
  @ApiResponse({ status: 201, type: Cart })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @ApiOperation({ summary: 'Delete cart by ID' })
  @ApiResponse({ status: 201, type: Cart })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
