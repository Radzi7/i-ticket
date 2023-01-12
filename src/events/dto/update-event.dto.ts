import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  name?: string;
  photo?: string;
  start_date?: Date;
  start_time?: Date;
  finish_date?: Date;
  finish_time?: Date;
  info?: string;
  event_type_id?: number;
  human_category_id?: number;
  venue_id?: number;
  lang_id?: number;
  release_date?: Date;
}
