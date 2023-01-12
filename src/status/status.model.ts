import {
  DataType,
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { Cart } from 'src/cart/cart.model';
import { Costumer } from 'src/costumer/costumer.model';
import { Ticket } from 'src/ticket/ticket.model';



@Table({ tableName: 'status' })
export class Status extends Model<Status> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => Cart)
  cart: Cart;

  @HasMany(() => Booking)
  Booking: Cart;

  // @HasMany(() => Ticket)
  // ticket: Cart;
}
