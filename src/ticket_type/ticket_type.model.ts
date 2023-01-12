import {
  DataType,
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Costumer } from 'src/costumer/costumer.model';
import { Ticket } from 'src/ticket/ticket.model';

@Table({ tableName: 'ticket_type' })
export class TicketType extends Model<TicketType> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => Ticket)
  ticket: Ticket[];
}
