import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { CostumerAddress } from 'src/costumer_address/costumer_address.model';

@Table({ tableName: 'flat' })
export class Flat extends Model<Flat> {
  @ApiProperty({ example: '1', description: 'Unique Id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '16', description: 'Count of floor' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  floor: number;

  @ApiProperty({ example: 'yangi', description: 'condition of flat' })
  @Column({
    type: DataType.STRING,
  })
  condition: string;

  @HasMany(() => CostumerAddress)
  customera: CostumerAddress;
}
