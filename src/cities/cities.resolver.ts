import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  City,
  CityUncheckedCreateInput,
  CityUncheckedUpdateInput,
} from 'src/@generated';
import { CitiesService } from './cities.service';

@Resolver(() => City)
export class CitiesResolver {
  constructor(private readonly cityService: CitiesService) {}

  @Mutation(() => City)
  createCity(
    @Args('createCityInput') createCityInput: CityUncheckedCreateInput,
  ) {
    return this.cityService.create(createCityInput);
  }

  @Query(() => [City], { name: 'cities' })
  findAll(
    @Args('regionId', { type: () => Int, nullable: true }) regionId?: number,
  ) {
    return this.cityService.findAll(regionId);
  }

  @Query(() => City, { name: 'city' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cityService.findOne(id);
  }

  @Mutation(() => City)
  updateCity(
    @Args('input') input: CityUncheckedUpdateInput,
    @Args('id') id: number,
  ): Promise<City> {
    return this.cityService.update(id, input);
  }

  @Mutation(() => City)
  removeCity(@Args('id', { type: () => Int, nullable: false }) id: number) {
    return this.cityService.remove(id);
  }
}
