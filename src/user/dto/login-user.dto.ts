import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty({ example: 'john@email.com' })
  email: string;

  @ApiProperty({ example: 'securepassword' })
  password: string;
}