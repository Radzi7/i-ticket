import { DataType, Table, Model, Column } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'admins' })
export class Admin extends Model<Admin> {
  @ApiProperty({ example: '1', description: 'Unikal ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Abdulloh', description: 'User name' })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({ example: 'admin@gmail.com', description: 'User name' })
  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @ApiProperty({ example: 'P@$$w0Rd', description: 'Admin password' })
  @Column({ type: DataType.STRING })
  password: string;

  @Column({ type: DataType.STRING })
  hashed_refresh_token: string;

  @ApiProperty({
    example: 'true',
    description: 'admin activation (should be true or false)',
  })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  is_active: boolean;

  @ApiProperty({
    example: 'true',
    description: 'admin creator role activation (should be true or false)',
  })
  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  is_creator: boolean;
}
