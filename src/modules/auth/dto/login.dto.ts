import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @ApiProperty({ required: true, default: 'a@gmail.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ required: true, default: '12345678' })
  @IsNotEmpty()
  password!: string;
}
