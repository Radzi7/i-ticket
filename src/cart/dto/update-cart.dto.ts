import { PartialType } from '@nestjs/mapped-types';
import { CreateCartDto } from './create-cart.dto';

export class UpdateCartDto extends PartialType(CreateCartDto) {
  // ticket_id?: number;
  // costumer_id?: number;
  // createdAt?: Date;
  // finishedAt?: Date;
  // status_id?: number;
}
