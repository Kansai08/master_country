import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
    @ApiProperty({ example: 'john' })
    username: string;

    @ApiProperty({ example: 'john@email.com' })
    email: string;

    @ApiProperty({ example: 'securepassword' })
    password: string;

    @ApiProperty({ example: '665e2bdb4a6a42aabdd0c1f1' })
    country: string;
}
