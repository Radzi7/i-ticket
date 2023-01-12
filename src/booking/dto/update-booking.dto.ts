import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateBookingDto } from './create-booking.dto';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  @ApiProperty({ example: '1', description: 'payment_method_id' })
  payment_method_id?: number;

  @ApiProperty({ example: '1', description: 'delivery_method_id' })
  delivery_method_id?: number;

  @ApiProperty({ example: '1', description: 'discount_coupon_id' })
  discount_coupon_id?: number;

  @ApiProperty({ example: '1', description: 'status_id' })
  status_id?: number;
}
