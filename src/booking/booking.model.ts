import { ApiProperty } from '@nestjs/swagger';
import { DataType, Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.model';
import { DeliveryMethod } from 'src/delivery_method/delivery_method.model';
import { DiscountCoupon } from 'src/discount_coupon/discount_coupon.model';
import { PaymentMethod } from 'src/payment_method/payment_method.model';
import { Status } from 'src/status/status.model';

@Table({ tableName: 'booking' })
export class Booking extends Model<Booking> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Cart)
  @ApiProperty({ example: '1', description: 'Cart ID' })
  @Column({ type: DataType.INTEGER })
  cart_Id: number;
  @BelongsTo(() => Cart)
  cart: Cart[];

  @ForeignKey(() => PaymentMethod)
  @ApiProperty({ example: '1', description: 'Payment method ID' })
  @Column({ type: DataType.INTEGER })
  payment_method_id: number;
  @BelongsTo(() => PaymentMethod)
  payment_method: PaymentMethod[];

  @ForeignKey(() => DeliveryMethod)
  @ApiProperty({ example: '1', description: 'Delivery method ID' })
  @Column({ type: DataType.INTEGER })
  delivery_method_id: number;
  @BelongsTo(() => DeliveryMethod)
  delivery_method: DeliveryMethod[];

  @ForeignKey(() => DiscountCoupon)
  @ApiProperty({ example: '1', description: 'Discount coupon ID' })
  @Column({ type: DataType.INTEGER })
  discount_coupon_id: number;
  @BelongsTo(() => DiscountCoupon)
  discount_coupon: DiscountCoupon[];

  @ForeignKey(() => Status)
  @ApiProperty({ example: '1', description: 'Status ID' })
  @Column({ type: DataType.INTEGER })
  status_id: number;
  @BelongsTo(() => Status)
  status: Status[];
}
