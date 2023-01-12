import {
  DataType,
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Costumer } from 'src/costumer/costumer.model';

interface costumerCardCreationAttrs {
  costumer_id: number;
  name: string;
  phone: string;
  number: string;
  year: string;
  month: string;
  is_active: boolean;
  is_main: boolean;
}

@Table({ tableName: 'costumer_card' })
export class CostumerCard extends Model<
  CostumerCard,
  costumerCardCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  
  @ForeignKey(() => Costumer)
  @Column({ type: DataType.INTEGER })
  costumer_id: number;
  // @BelongsTo(() => Costumer)
  // costumer: Costumer[];

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  phone: string;

  @Column({ type: DataType.STRING })
  number: string;

  @Column({ type: DataType.STRING })
  year: string;

  @Column({ type: DataType.STRING })
  month: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_active: boolean;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_main: boolean;

}
