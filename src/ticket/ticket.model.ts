import {
  DataType,
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.model';
import { Costumer } from 'src/costumer/costumer.model';
import { Events } from 'src/events/events.model';
import { Seat } from 'src/seat/seat.model';
import { Status } from 'src/status/status.model';
import { TicketType } from 'src/ticket_type/ticket_type.model';


@Table({ tableName: 'ticket' })
export class Ticket extends Model<Ticket> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Events)
  @Column({ type: DataType.INTEGER })
  event_id: number;
  @BelongsTo(() => Events)
  Event: Events[];

  @ForeignKey(() => Seat)
  @Column({ type: DataType.INTEGER })
  seat_id: number;
  @BelongsTo(() => Seat)
  seat: Seat[];

  @Column({ type: DataType.INTEGER })
  price: number;

  @Column({ type: DataType.INTEGER })
  service_fee: number;

  @ForeignKey(() => Status)
  @Column({ type: DataType.INTEGER })
  status: number;
  @BelongsTo(() => Status)
  status_: Status[];

  @ForeignKey(() => TicketType)
  @Column({ type: DataType.INTEGER })
  ticket_type: number;
  @BelongsTo(() => TicketType)
  ticket_Type: TicketType[];

  @HasMany(() => Cart)
  cart: Cart;
}
