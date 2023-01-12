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
import { District } from 'src/district/district.model';
import { Region } from 'src/region/region.model';
import { Seat } from 'src/seat/seat.model';
import { VenueType } from 'src/venue_type/venue_type.model';

interface venueCreationAttrs {
  name: string;
  address: string;
  location: string;
  site: string;
  phone: string;
  venue_type_id: number;
  schema: string;
  region_id: number;
  district_id: number;
}

@Table({ tableName: 'venue' })
export class Venue extends Model<Venue, venueCreationAttrs> {
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
  address: string;

  @Column({ type: DataType.STRING })
  location: string;

  @Column({ type: DataType.STRING })
  site: string;

  @Column({ type: DataType.STRING })
  phone: string;

  @ForeignKey(() => VenueType)
  @Column({ type: DataType.INTEGER })
  venue_type_id: number;
  @BelongsTo(() => VenueType)
  venue_type: VenueType;

  @Column({ type: DataType.STRING })
  schema: string;

  @ForeignKey(() => Region)
  @Column({ type: DataType.INTEGER })
  region_id: number;
  @BelongsTo(() => Region)
  region: Region;

  @ForeignKey(() => District)
  @Column({ type: DataType.INTEGER })
  district_id: number;
  @BelongsTo(() => District)
  district: District;
  
  @HasMany(() => Seat)
  seat: Seat;
}
