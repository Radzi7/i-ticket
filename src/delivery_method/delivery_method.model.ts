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

interface deliveryMethodCreationAttrs {
  name: string;
  description: string;
}

@Table({ tableName: 'payment_method' })
export class DeliveryMethod extends Model<
  DeliveryMethod,
  deliveryMethodCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  description: string;

  @HasOne(() => Booking)
  booking: Booking[]; 
}
