import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength, IsEmail } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'user@mail.com', description: 'User email address' })
  @IsEmail({}, { message: 'Incorrect form of email' })
  readonly email: string;

  @ApiProperty({ example: 'qwerty123', description: 'User password' })
  @IsString({ message: 'Admin password must be a string' })
  @MinLength(4, { message: 'Password must be at least 4 characters' })
  readonly password: string;
}