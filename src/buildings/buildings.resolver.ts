import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import {
  Building,
  BuildingUncheckedCreateInput,
  BuildingUncheckedUpdateInput,
} from 'src/@generated';
import { BuildingsService } from './buildings.service';
import { BuildingsForMapResponse } from './dto/buildings-for-map.response';
import { BuildingsResponse } from './dto/buildings-response';
import { FileUpload, GraphQLUpload } from 'graphql-upload-minimal';

@Resolver(() => Building)
export class BuildingsResolver {
  constructor(private readonly buildingsService: BuildingsService) {}

  @Mutation(() => Building)
  createBuilding(
    @Args('createBuildingInput')
    createBuildingInput: BuildingUncheckedCreateInput,
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
  ) {
    return this.buildingsService.create(createBuildingInput, file);
  }

  @Query(() => [Building], { name: 'buildings' })
  findAll(
    @Args('groupId', { type: () => Int, nullable: true }) groupId?: number,
    @Args('complexId', { type: () => Int, nullable: true }) complexId?: number,
    @Args('cityId', { type: () => Int, nullable: true }) cityId?: number,
    @Args('districtId', { type: () => Int, nullable: true })
    districtId?: number,
    @Args('completed', { type: () => Boolean, nullable: true })
    completed?: boolean,
    @Args('page', { type: () => Int, nullable: true }) page?: number,
  ) {
    return this.buildingsService.findAll({
      groupId,
      complexId,
      cityId,
      districtId,
      completed,
      page,
    });
  }

  @Query(() => BuildingsResponse, { name: 'buildingsWithCount' })
  getBuildingsWithCount(
    @Args('groupId', { type: () => Int, nullable: true }) groupId?: number,
    @Args('complexId', { type: () => Int, nullable: true }) complexId?: number,
    @Args('cityId', { type: () => Int, nullable: true }) cityId?: number,
    @Args('districtId', { type: () => Int, nullable: true })
    districtId?: number,
    @Args('completed', { type: () => Boolean, nullable: true })
    completed?: boolean,
    @Args('page', { type: () => Int, nullable: true }) page?: number,
  ) {
    return this.buildingsService.getBuildingsWithCount({
      groupId,
      complexId,
      cityId,
      districtId,
      completed,
      page,
    });
  }

  @Query(() => [BuildingsForMapResponse], { name: 'buildingsForMap' })
  getbuildingsForMap() {
    return this.buildingsService.getBuildingsForMap();
  }

  @Query(() => Building, { name: 'building' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsService.findOneWithSales(id);
  }

  @Query(() => Building, { name: 'buildingWithProps' })
  findOneWithProperties(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsService.findOneWithProperties(id);
  }

  @Mutation(() => Building)
  updateBuilding(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateBuildingInput')
    updateBuildingInput: BuildingUncheckedUpdateInput,
    @Args({ name: 'file', type: () => GraphQLUpload, nullable: true })
    file: FileUpload,
  ) {
    return this.buildingsService.update(id, updateBuildingInput, file);
  }

  @Mutation(() => Building)
  removeBuilding(@Args('id', { type: () => Int }) id: number) {
    return this.buildingsService.remove(id);
  }
}
