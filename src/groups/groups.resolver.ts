import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  Group,
  GroupUncheckedCreateInput,
  GroupUncheckedUpdateInput,
  PropertyType,
} from 'src/@generated';
import { GroupWithSalesResponse } from './dto/group-sales.response';
import { GroupsService } from './groups.service';

@Resolver(() => Group)
export class GroupsResolver {
  constructor(private readonly groupsService: GroupsService) {}

  @Mutation(() => Group)
  createGroup(@Args('input') input: GroupUncheckedCreateInput) {
    return this.groupsService.create(input);
  }

  @Query(() => [Group], { name: 'groups' })
  findAll() {
    return this.groupsService.findAll();
  }

  @Query(() => [GroupWithSalesResponse], { name: 'groupsWithSalesSum' })
  findAllWithSalesSum(
    @Args('propertyType', { type: () => PropertyType })
    propertyType: PropertyType,
    @Args('date', { type: () => String }) date: string,
  ) {
    return this.groupsService.findAllWithSalesSum(propertyType, date);
  }

  @Query(() => Group, { name: 'group' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.groupsService.findOne(id);
  }

  @Mutation(() => Group)
  updateGroup(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: GroupUncheckedUpdateInput,
  ) {
    return this.groupsService.update(id, input);
  }

  @Mutation(() => Group)
  removeGroup(@Args('id', { type: () => Int }) id: number) {
    return this.groupsService.remove(id);
  }
}
