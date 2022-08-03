import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { GraphQLJWT } from 'graphql-scalars';

@ObjectType()
export class Token {
  @ApiProperty({ type: String })
  @Field(() => GraphQLJWT, { description: 'JWT access token' })
  accessToken: string;
  @ApiProperty({ type: String })
  @Field(() => GraphQLJWT, { description: 'JWT refresh token' })
  refreshToken: string;
}
