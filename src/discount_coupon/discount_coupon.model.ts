import {
  DataType,
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { Costumer } from 'src/costumer/costumer.model';

@Table({ tableName: 'discount_coupon' })
export class DiscountCoupon extends Model<DiscountCoupon> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasOne(() => Booking)
  booking: Booking[];
}
