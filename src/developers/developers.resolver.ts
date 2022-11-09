import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  Developer,
  DeveloperUncheckedCreateInput,
  DeveloperUncheckedUpdateInput,
} from 'src/@generated';
import { DevelopersService } from './developers.service';

@Resolver(() => Developer)
export class DevelopersResolver {
  constructor(private readonly developersService: DevelopersService) {}

  @Mutation(() => Developer)
  createDeveloper(@Args('input') input: DeveloperUncheckedCreateInput) {
    return this.developersService.create(input);
  }

  @Query(() => [Developer], { name: 'developers' })
  findAll(
    @Args('groupId', { type: () => Int, nullable: true }) groupId?: number,
  ) {
    return this.developersService.findAll(groupId);
  }

  @Query(() => Developer, { name: 'developer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.developersService.findOne(id);
  }

  @Mutation(() => Developer)
  updateDeveloper(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: DeveloperUncheckedUpdateInput,
  ) {
    return this.developersService.update(id, input);
  }

  @Mutation(() => Developer)
  removeDeveloper(@Args('id', { type: () => Int }) id: number) {
    return this.developersService.remove(id);
  }
}
