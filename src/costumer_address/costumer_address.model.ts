import {
  DataType,
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsToMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Costumer } from 'src/costumer/costumer.model';
import { Country } from 'src/country/country.model';
import { District } from 'src/district/district.model';
import { Flat } from 'src/flat/flat.model';
import { Region } from 'src/region/region.model';

// interface costumerAddressCreationAttrs {
//   costumer_id: number;
//   name: string;
//   country_id: string;
//   region_id: string;
//   district_id: string;
//   street: string;
//   house: string;
//   flat: string;
//   location: string;
//   post_index: string;
//   info: string;
// }

@Table({ tableName: 'costumer_address' })
export class CostumerAddress extends Model<CostumerAddress> {
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
  @BelongsTo(() => Costumer)
  costumer: Costumer[];

  @Column({ type: DataType.STRING })
  name: string;

  @ForeignKey(() => Country)
  @Column({ type: DataType.INTEGER })
  country_id: number;
  @BelongsTo(() => Country)
  country: Country[];

  @ForeignKey(() => Region)
  @Column({ type: DataType.INTEGER })
  region_id: number;
  @BelongsTo(() => Region)
  region: Region[];

  @ForeignKey(() => District)
  @Column({ type: DataType.INTEGER })
  district_id: number;
  @BelongsTo(() => District)
  district: District[];

  @Column({ type: DataType.STRING })
  street: string;

  @Column({ type: DataType.STRING })
  house: string;

  @ForeignKey(() => Flat)
  @Column({ type: DataType.INTEGER })
  flat_id: number;
  @BelongsTo(() => Flat)
  flat: Flat[];

  @Column({ type: DataType.STRING })
  location: string;

  @Column({ type: DataType.STRING })
  post_index: string;

  @Column({ type: DataType.STRING })
  info: string;
}
