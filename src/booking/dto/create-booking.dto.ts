import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingDto {
  @ApiProperty({ example: '1', description: 'cart_id' })
  readonly cart_Id: number;

  readonly createdAt: Date;
  readonly finishedAt: Date;

  @ApiProperty({ example: '1', description: 'payment_method_id' })
  readonly payment_method_id: number;

  @ApiProperty({ example: '1', description: 'delivery_method_id' })
  readonly delivery_method_id: number;

  @ApiProperty({ example: '1', description: 'discount_coupon_id' })
  readonly discount_coupon_id: number;

  @ApiProperty({ example: '1', description: 'status_id' })
  readonly status_id: number;
}
