import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/modules/users/models/user.model';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class Post extends BaseModel {
  title: string;
  content: string;
  published: boolean;
  author: User;
}
