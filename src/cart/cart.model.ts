import { ApiProperty } from '@nestjs/swagger';
import {
  DataType,
  Table,
  Model,
  Column,
  BelongsToMany,
  BelongsTo,
  HasMany,
  HasOne,
  ForeignKey,
} from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { Costumer } from 'src/costumer/costumer.model';
import { Status } from 'src/status/status.model';
import { Ticket } from 'src/ticket/ticket.model';

interface cartCreationAttrs {
  ticket_id: number;
  costumer_id: number;
  status_id: number;
}

@Table({ tableName: 'cart' })
export class Cart extends Model<Cart, cartCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Ticket)
  @ApiProperty({ example: '1', description: 'Ticket ID' })
  @Column({ type: DataType.INTEGER })
  ticket_id: number;
  @BelongsTo(() => Ticket)
  ticket: Ticket[];

  @ForeignKey(() => Costumer)
  @ApiProperty({ example: '1', description: 'Costumer ID' })
  @Column({ type: DataType.INTEGER })
  costumer_id: number;
  @BelongsTo(() => Costumer)
  costumer: Costumer[];

  @ForeignKey(() => Status)
  @ApiProperty({ example: '1', description: 'Status ID' })
  @Column({ type: DataType.INTEGER })
  status_id: number;
  @BelongsTo(() => Status)
  status: Status[];

  @HasOne(() => Booking)
  booking: Booking[];
}
