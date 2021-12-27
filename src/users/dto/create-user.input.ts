import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  firstName!: string;

  @Field(() => String)
  lastName!: string;
}
