import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/entities/user.entity';

@Entity()
@ObjectType()
export class Tech {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column()
  @Field()
  name!: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  userId!: number;

  @ManyToMany(() => User, (user) => user.techs)
  @Field(() => User, { nullable: true })
  user?: User;
}
