import { DataType, Table, Model, Column, ForeignKey,  HasMany } from 'sequelize-typescript';


@Table({ tableName: 'event_type' })
export class EventType extends Model<EventType> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
  })
  parent_event_type_id: number;

  @HasMany(() => EventType)
  event_type: EventType[];
}
