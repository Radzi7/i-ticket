import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, IsBoolean, IsOptional } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({ example: 'Abdulloh', description: 'Admin name' })
  @IsString({ message: "Ism satr bo'lishi kerak" })
  readonly name: string;

  @ApiProperty({ example: 'admin@mail.com', description: 'Admin email' })
  @IsEmail({}, { message: 'Incorrect form of email' })
  readonly email: string;

  @ApiProperty({ example: 'qwerty123', description: 'Admin password' })
  @IsString({ message: 'Admin password must be a string' })
  @MinLength(4, { message: 'Password must be at least 4 characters' })
  readonly password: string;

  @IsOptional()
  @IsString()
  readonly hashed_password: string;

  @IsOptional()
  @IsBoolean()
  readonly is_active: boolean;

  @IsOptional()
  @IsBoolean()
  readonly is_creator: boolean;
}
