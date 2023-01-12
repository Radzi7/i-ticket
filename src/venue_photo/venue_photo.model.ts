import {
  DataType,
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Costumer } from 'src/costumer/costumer.model';

interface venuePhotoCreationAttrs {
  object_id: number;
  url: string;
}

@Table({ tableName: 'venue_photo' })
export class VenuePhoto extends Model<VenuePhoto, venuePhotoCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  object_id: number;

  @Column({ type: DataType.STRING })
  url: string;
}
