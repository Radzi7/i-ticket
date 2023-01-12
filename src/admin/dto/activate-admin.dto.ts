import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class ActivateAdminDto {
  @ApiProperty({ example: 'name1', description: 'Admin name' })
  @IsString({ message: 'Admin password must be a string' })
  @MinLength(4, { message: 'Password must be at least 4 characters' })
  readonly password: string;

  @IsEmail({}, { message: 'Incorrect form of email' })
  readonly email: string;
}