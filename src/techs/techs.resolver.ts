import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../users/entities/user.entity';
import { CreateTechInput } from './dto/create-tech.input';
import { Tech } from './tech.entity';
import { TechsService } from './techs.service';

@Resolver(() => Tech)
export class TechsResolver {
  constructor(private techsService: TechsService) {}

  @Query(() => [Tech])
  getTechs(): Promise<Tech[]> {
    return this.techsService.findAll();
  }

  @Query(() => Tech)
  getTech(@Args('id', { type: () => Int }) id: number): Promise<Tech> {
    return this.techsService.findOne(id);
  }

  @ResolveField(() => User)
  getUser(@Parent() tech: Tech): Promise<User> {
    return this.techsService.getUser(tech.userId);
  }

  @Mutation(() => Tech)
  createTech(
    @Args('createTechInput') createTechInput: CreateTechInput
  ): Promise<Tech> {
    return this.techsService.createTech(createTechInput);
  }
}
