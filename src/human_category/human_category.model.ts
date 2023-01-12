import {
  DataType,
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Gender } from 'src/gender/gender.model';

interface humanCategoryCreationAttrs {
  name: string;
  start_age: number;
  finish_age: number;
  gender: number;
}

@Table({ tableName: 'human_category' })
export class HumanCategory extends Model<
  HumanCategory,
  humanCategoryCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.INTEGER })
  start_age: number;

  @Column({ type: DataType.INTEGER })
  finish_age: number;

  @ForeignKey(() => Gender)
  @Column({
    type: DataType.INTEGER,
  })
  gender: number;
}
