import { ApiProperty } from "@nestjs/swagger";

export class CreateCartDto {
  @ApiProperty({ example: '1', description: 'Ticket ID' })
  readonly ticket_id: number;

  @ApiProperty({ example: '1', description: 'Costumer ID' })
  readonly costumer_id: number;

  @ApiProperty({ example: '16.12.2022', description: 'Created date' })
  readonly createdAt: Date;

  @ApiProperty({ example: '16.12.2022', description: 'Finished date' })
  readonly finishedAt: Date;

  @ApiProperty({ example: '1', description: 'Status ID' })
  readonly status_id: number;
}
