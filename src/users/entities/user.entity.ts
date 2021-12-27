import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tech } from '../../techs/tech.entity';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Column()
  @Field()
  firstName!: string;

  @Column()
  @Field()
  lastName!: string;

  @ManyToMany(() => Tech, (tech) => tech.user)
  @Field(() => [Tech], { nullable: true })
  techs?: Tech[];
}
