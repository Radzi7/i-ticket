import { ApiProperty } from '@nestjs/swagger';
import {
  DataType,
  Table,
  Model,
  Column,
  BelongsToMany,
  HasMany,
  HasOne,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.model';
import { CostumerAddress } from 'src/costumer_address/costumer_address.model';
import { CostumerCard } from 'src/costumer_card/costumer_card.model';
import { Gender } from 'src/gender/gender.model';
import { Language } from 'src/language/language.model';

@Table({ tableName: 'costumer' })
export class Costumer extends Model<Costumer> {
  @ApiProperty({ example: 1, description: 'Costumer unique ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Abdulloh', description: 'Costumer first name' })
  @Column({ type: DataType.STRING })
  first_name: string;

  @ApiProperty({ example: 'Karimov', description: 'Costumer last name' })
  @Column({ type: DataType.STRING })
  last_name: string;

  @ApiProperty({ example: '9506541525', description: 'Costumer phone number' })
  @Column({ type: DataType.STRING })
  phone: string;

  @ApiProperty({ example: 'P@$$w0Rd', description: 'Costumer password' })
  @Column({ type: DataType.STRING })
  password: string;

  @ApiProperty({
    example: 'eagle@gmail.com',
    description: 'Costumer email address',
  })
  @Column({ type: DataType.STRING })
  email: string;

  @ApiProperty({ example: '12.12.2022', description: 'Costumer bith day date' })
  @Column({ type: DataType.DATE })
  birth_date: Date;

  @ForeignKey(() => Gender)
  @ApiProperty({ example: '1', description: 'Costumer gender' })
  @Column({ type: DataType.INTEGER })
  gender: number;
  @BelongsTo(() => Gender)
  Gender: Gender[];

  @ForeignKey(() => Language)
  @ApiProperty({ example: '1', description: 'Costumer speaking language' })
  @Column({ type: DataType.INTEGER })
  lang_id: number;
  @BelongsTo(() => Language)
  language: Language[];

  @ApiProperty({ example: '#########', description: 'Hashed refresh token' })
  @Column({ type: DataType.STRING })
  hashed_refresh_token: string;

  @HasOne(() => CostumerAddress)
  costumer_address: CostumerAddress[];

  @HasMany(() => CostumerCard)
  costumer_card: CostumerCard[];

  @HasMany(() => Cart)
  cart: Cart[];
}
