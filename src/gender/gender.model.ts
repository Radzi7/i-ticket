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
import { HumanCategory } from 'src/human_category/human_category.model';

@Table({ tableName: 'gender' })
export class Gender extends Model<Gender> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => HumanCategory)
  human_category: HumanCategory;
  
  @HasMany(() => Costumer)
  costumer: Costumer[];
}
