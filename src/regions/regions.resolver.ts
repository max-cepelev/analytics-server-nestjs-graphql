import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  Region,
  RegionUncheckedCreateInput,
  RegionUncheckedUpdateInput,
} from 'src/@generated';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RegionsService } from './regions.service';

@Resolver(() => Region)
export class RegionsResolver {
  constructor(private readonly regionsService: RegionsService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Region)
  createRegion(@Args('input') input: RegionUncheckedCreateInput) {
    return this.regionsService.create(input);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [Region], { name: 'regions' })
  findAll() {
    return this.regionsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => Region, { name: 'region' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.regionsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Region)
  updateRegion(
    @Args('id') id: number,
    @Args('input') input: RegionUncheckedUpdateInput,
  ) {
    return this.regionsService.update(id, input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => Region)
  removeRegion(@Args('id', { type: () => Int }) id: number) {
    return this.regionsService.remove(id);
  }
}
