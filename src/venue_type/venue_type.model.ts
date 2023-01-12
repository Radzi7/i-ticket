import {
  DataType,
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Costumer } from 'src/costumer/costumer.model';

interface venueTypeCreationAttrs {
  name: string;
}

@Table({ tableName: 'venue_type' })
export class VenueType extends Model<VenueType, venueTypeCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;
  
}
