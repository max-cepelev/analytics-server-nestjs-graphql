import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  District,
  DistrictUncheckedCreateInput,
  DistrictUncheckedUpdateInput,
} from 'src/@generated';
import { DistrictsService } from './districts.service';

@Resolver(() => District)
export class DistrictsResolver {
  constructor(private readonly districtsService: DistrictsService) {}

  @Mutation(() => District)
  createDistrict(@Args('input') input: DistrictUncheckedCreateInput) {
    return this.districtsService.create(input);
  }

  @Query(() => [District], { name: 'districts' })
  findAll(
    @Args('cityId', { type: () => Int, nullable: true }) cityId?: number,
  ) {
    return this.districtsService.findAll(cityId);
  }

  @Query(() => District, { name: 'district' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.districtsService.findOne(id);
  }

  @Mutation(() => District)
  updateDistrict(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: DistrictUncheckedUpdateInput,
  ) {
    return this.districtsService.update(id, input);
  }

  @Mutation(() => District)
  removeDistrict(@Args('id', { type: () => Int }) id: number) {
    return this.districtsService.remove(id);
  }
}
