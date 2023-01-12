import { ApiProperty } from "@nestjs/swagger";

export class CreateCostumerAddressDto {
  @ApiProperty({ example: '1', description: 'Costumer ID' })
  readonly costumer_id: number;

  @ApiProperty({ example: 'Abdulloh', description: 'Costumer addressname' })
  readonly name: string;

  @ApiProperty({ example: '1', description: 'Country ID' })
  readonly country_id: number;

  @ApiProperty({ example: '1', description: 'Region ID' })
  readonly region_id: number;

  @ApiProperty({ example: '1', description: 'District ID' })
  readonly district_id: number;

  @ApiProperty({ example: 'Navoi', description: 'Street name' })
  readonly street: string;

  @ApiProperty({ example: 'House name', description: 'House name' })
  readonly house: string;

  @ApiProperty({ example: '1', description: 'Flat ID' })
  readonly flat_id: number;

  @ApiProperty({ example: 'URL', description: 'Location url' })
  readonly location: string;

  @ApiProperty({ example: 'Post index', description: 'Write here post index' })
  readonly post_index: string;

  @ApiProperty({ example: 'Some informations', description: 'Informations about costumer address' })
  readonly info: string;
}
