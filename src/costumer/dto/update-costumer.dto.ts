import { PartialType } from '@nestjs/mapped-types';
import { CreateCostumerDto } from './create-costumer.dto';

export class UpdateCostumerDto extends PartialType(CreateCostumerDto) {
  first_name?: string;
  last_name?: string;
  phone?: string;
  hashedPassword?: string;
  email?: string;
  birth_date?: Date;
  gender?: number;
  lang_id?: number;
  hashed_refresh_token?: string;
}
