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

@Table({ tableName: 'country' })
export class Country extends Model<Country> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => CostumerAddress)
  customer_address: CostumerAddress;
}
