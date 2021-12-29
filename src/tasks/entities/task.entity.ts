import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column()
  @Field(() => String)
  name!: string;

  @Column({ default: false })
  @Field(() => Boolean, { defaultValue: false })
  isDone!: boolean;

  @Column({ default: false })
  @Field(() => Boolean, { defaultValue: false })
  isDeleted!: boolean;
}
