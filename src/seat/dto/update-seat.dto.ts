import { PartialType } from '@nestjs/mapped-types';
import { CreateSeatDto } from './create-seat.dto';

export class UpdateSeatDto extends PartialType(CreateSeatDto) {
   sector?: number;
   row_number?: number;
   number?: number;
   venue_id?: number;
   seat_type_id?: number;
   location_in_schema?: string;
}
