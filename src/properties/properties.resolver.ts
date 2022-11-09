import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  Property,
  PropertyUncheckedCreateInput,
  PropertyUpdateInput,
} from 'src/@generated';
import { LivingPropsAggregateResponse } from './dto/living-rooms-aggregate.response';
import { PropAggregateResponse } from './dto/prop-aggregate.response';
import { PropCountsResponse } from './dto/props-counts.response';
import { PropertiesService } from './properties.service';

@Resolver(() => Property)
export class PropertiesResolver {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Mutation(() => Property)
  createProperty(@Args('input') input: PropertyUncheckedCreateInput) {
    return this.propertiesService.create(input);
  }

  @Query(() => [Property], { name: 'properties' })
  findAll() {
    return this.propertiesService.findAll();
  }

  @Query(() => Property, { name: 'property' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.propertiesService.findOne(id);
  }

  @Query(() => PropCountsResponse, { name: 'propCounts' })
  getPropsCounts(@Args('buildingId', { type: () => Int }) buildingId: number) {
    return this.propertiesService.getPropCounts(buildingId);
  }

  @Mutation(() => [Property], { name: 'saveAllProperies' })
  updateMany(
    @Args('input', { type: () => [PropertyUncheckedCreateInput] })
    input: PropertyUncheckedCreateInput[],
  ) {
    return this.propertiesService.upsertMany(input);
  }

  @Query(() => PropAggregateResponse, { name: 'propAggregate' })
  getPropAggregate(
    @Args('buildingIds', { type: () => [Int] }) buildingIds: number[],
  ) {
    return this.propertiesService.getPropAggregate(buildingIds);
  }

  @Query(() => LivingPropsAggregateResponse, { name: 'livingPropsAggregate' })
  getLivingRoomsAggregate(
    @Args('buildingId', { type: () => Int }) buildingId: number,
  ) {
    return this.propertiesService.getLivingRoomsAggregate(buildingId);
  }

  @Mutation(() => Property)
  updateProperty(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: PropertyUpdateInput,
  ) {
    return this.propertiesService.update(id, input);
  }

  @Mutation(() => Property)
  removeProperty(@Args('id', { type: () => Int }) id: number) {
    return this.propertiesService.remove(id);
  }
}
