import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha, isNotEmpty } from 'class-validator';

@InputType()
export class CreateTechInput {
  @Field()
  name!: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int)
  userId?: number;
}
