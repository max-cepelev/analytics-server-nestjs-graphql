import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  Complex,
  ComplexUncheckedCreateInput,
  ComplexUncheckedUpdateInput,
} from 'src/@generated';
import { ComplexesService } from './complexes.service';

@Resolver(() => Complex)
export class ComplexesResolver {
  constructor(private readonly complexesService: ComplexesService) {}

  @Mutation(() => Complex)
  createComplex(
    @Args('createComplexInput') createComplexInput: ComplexUncheckedCreateInput,
  ) {
    return this.complexesService.create(createComplexInput);
  }

  @Query(() => [Complex], { name: 'complexes' })
  findAll(
    @Args('groupId', { type: () => Int, nullable: true }) groupId?: number,
    @Args('districtId', { type: () => Int, nullable: true })
    districtId?: number,
    @Args('cityId', { type: () => Int, nullable: true }) cityId?: number,
  ) {
    return this.complexesService.findAll(groupId, districtId, cityId);
  }

  @Query(() => Complex, { name: 'complex' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.complexesService.findOne(id);
  }

  @Mutation(() => Complex)
  updateComplex(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: ComplexUncheckedUpdateInput,
  ) {
    return this.complexesService.update(id, input);
  }

  @Mutation(() => Complex)
  removeComplex(@Args('id', { type: () => Int }) id: number) {
    return this.complexesService.remove(id);
  }
}
