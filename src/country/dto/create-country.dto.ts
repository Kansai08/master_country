import { ApiProperty } from '@nestjs/swagger';

export class CreateCountryDto {
  @ApiProperty({ example: 'Thailand' })
  name: string;
}
