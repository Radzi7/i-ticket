import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFlatDto {
  @ApiProperty({ example: '9', description: 'Count of floor' })
  @IsOptional()
  @IsNumber({}, { message: 'Floor must be integer' })
  readonly floor: number;
  @ApiProperty({ example: 'Good', description: 'Condition of flat' })
  @IsOptional()
  @IsString({ message: 'Condition must be string' })
  readonly condition: string;
}
