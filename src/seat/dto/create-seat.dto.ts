export class CreateSeatDto {
  readonly sector: number;
  readonly row_number: number;
  readonly number: number;
  readonly venue_id: number;
  readonly seat_type_id: number;
  readonly location_in_schema: string;
}
