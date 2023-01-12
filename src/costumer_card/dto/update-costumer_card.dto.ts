import { PartialType } from '@nestjs/mapped-types';
import { CreateCostumerCardDto } from './create-costumer_card.dto';

export class UpdateCostumerCardDto extends PartialType(CreateCostumerCardDto) {
  costumer_id?: number;
  name?: string;
  phone?: string;
  number?: string;
  year?: string;
  month?: string;
  is_active?: boolean;
  is_main?: boolean;
}
