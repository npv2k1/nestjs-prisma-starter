import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

export class SignupDTO {
  email: string;

  password: string;

  firstname?: string;

  lastname?: string;
}
