export class CreateTicketDto {
  readonly event_id: number;
  readonly seat_id: number;
  readonly price: number;
  readonly service_fee: number;
  readonly status: number;
  readonly ticket_type: number;
}
