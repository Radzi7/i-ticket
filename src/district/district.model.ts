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
import { CostumerAddress } from 'src/costumer_address/costumer_address.model';
import { Ticket } from 'src/ticket/ticket.model';
import { Venue } from 'src/venue/venue.model';

@Table({ tableName: 'district' })
export class District extends Model<District> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => Venue)
  venue: Venue;

  @HasMany(() => CostumerAddress)
  customer: CostumerAddress[];
}
