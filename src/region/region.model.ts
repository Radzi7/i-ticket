import {
  DataType,
  Table,
  Model,
  Column,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { CostumerAddress } from 'src/costumer_address/costumer_address.model';
import { Venue } from 'src/venue/venue.model';

@Table({ tableName: 'region' })
export class Region extends Model<Region> {
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
  costumer_address: CostumerAddress;
}
