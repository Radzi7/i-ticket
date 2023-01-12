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
import { EventType } from 'src/event_type/event_type.model';
import { HumanCategory } from 'src/human_category/human_category.model';
import { Language } from 'src/language/language.model';
import { Ticket } from 'src/ticket/ticket.model';
import { Venue } from 'src/venue/venue.model';

interface eventsCreationAttrs {
  name: string;
  photo: string;
  start_date: Date;
  start_time: Date;
  finish_date: Date;
  finish_time: Date;
  info: string;
  event_type_id: number;
  human_category_id: number;
  venue_id: number;
  lang_id: number;
  release_date: Date;
}

@Table({ tableName: 'events' })
export class Events extends Model<Events, eventsCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  photo: string;

  @Column({ type: DataType.DATE })
  start_date: Date;

  @Column({ type: DataType.DATE })
  start_time: Date;

  @Column({ type: DataType.DATE })
  finish_date: Date;

  @Column({ type: DataType.DATE })
  finish_time: Date;

  @Column({ type: DataType.STRING })
  info: string;

  @ForeignKey(() => EventType)
  @Column({ type: DataType.INTEGER })
  event_type_id: number;

  @ForeignKey(() => HumanCategory)
  @Column({ type: DataType.INTEGER })
  human_category_id: number;

  @ForeignKey(() => Venue)
  @Column({ type: DataType.INTEGER })
  venue_id: number;

  @ForeignKey(() => Language)
  @Column({ type: DataType.INTEGER })
  lang_id: number;
  @BelongsTo(() => Language)
  language: Language[];

  @Column({ type: DataType.DATE })
  release_date: Date;

  @HasMany(() => Ticket)
  ticket: Ticket[];
}
