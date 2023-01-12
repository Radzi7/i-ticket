import {
  DataType,
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { Costumer } from 'src/costumer/costumer.model';
import { SeatType } from 'src/seat_type/seat_type.model';
import { Ticket } from 'src/ticket/ticket.model';
import { Venue } from 'src/venue/venue.model';

interface seatCreationAttrs {
  sector: number;
  row_number: number;
  number: number;
  venue_id: number;
  seat_type_id: number;
  location_in_schema: string;
}

@Table({ tableName: 'seat' })
export class Seat extends Model<Seat, seatCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  sector: number;

  @Column({ type: DataType.INTEGER })
  row_number: number;

  @Column({ type: DataType.INTEGER })
  number: number;

  @ForeignKey(() => Venue)
  @Column({ type: DataType.INTEGER })
  venue_id: number;
  @BelongsTo(() => Venue)
  venue: Venue;

  @ForeignKey(() => SeatType)
  @Column({ type: DataType.INTEGER })
  seat_type_id: number;
  @BelongsTo(() => SeatType)
  seatType: SeatType;

  @Column({ type: DataType.STRING })
  location_in_schema: string;

  @HasMany(() => Ticket)
  ticket: Ticket[];
}
