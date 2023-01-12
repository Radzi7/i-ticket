import { PartialType } from '@nestjs/mapped-types';
import { CreateTicketDto } from './create-ticket.dto';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
    event_id?: number;
    seat_id?: number;
    price?: number;
    service_fee?: number;
    status?: number;
    ticket_type?: number;
}
