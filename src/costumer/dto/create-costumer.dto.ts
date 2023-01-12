import { ApiProperty } from '@nestjs/swagger';

export class CreateCostumerDto {
  @ApiProperty({ example: 'Abdulloh', description: 'Costumer first name' })
  readonly first_name: string;

  @ApiProperty({ example: 'Karimov', description: 'Costumer last name' })
  readonly last_name: string;

  @ApiProperty({ example: '9506541525', description: 'Costumer phone number' })
  readonly phone: string;

  @ApiProperty({ example: 'P@$$w0Rd', description: 'Costumer password' })
  readonly password: string;

  @ApiProperty({
    example: 'eagle@gmail.com',
    description: 'Costumer email address',
  })
  readonly email: string;

  @ApiProperty({ example: '12.12.2022', description: 'Costumer bith day date' })
  readonly birth_date: Date;

  @ApiProperty({ example: '1', description: 'Costumer gender' })
  readonly gender: number;

  @ApiProperty({ example: '1', description: 'Costumer speaking language' })
  readonly lang_id: number;

  @ApiProperty({ example: '#########', description: 'Hashed refresh token' })
  readonly hashed_refresh_token: string;
}
