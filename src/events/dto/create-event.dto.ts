export class CreateEventDto {
  readonly name: string;
  readonly photo: string;
  readonly start_date: Date;
  readonly start_time: Date;
  readonly finish_date: Date;
  readonly finish_time: Date;
  readonly info: string;
  readonly event_type_id: number;
  readonly human_category_id: number;
  readonly venue_id: number;
  readonly lang_id: number;
  readonly release_date: Date;
}
