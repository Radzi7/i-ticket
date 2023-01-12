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
import { Events } from 'src/events/events.model';

@Table({ tableName: 'language' })
export class Language extends Model<Language> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasOne(() => Costumer)
  costumer: Costumer[];

  // @HasOne(() => Events)
  // event: Events[];
}
