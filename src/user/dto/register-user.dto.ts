import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
    @ApiProperty({ example: 'kansai' })
    username: string;

    @ApiProperty({ example: 'kansai@email.com' })
    email: string;

    @ApiProperty({ example: '123456' })
    password: string;

    @ApiProperty({ example: '665e2bdb4a6a42aabdd0c1f1' })
    country: string;
}
