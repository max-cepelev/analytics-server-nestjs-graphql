import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  PropertyType,
  Sale,
  SaleUncheckedCreateInput,
  SaleUncheckedUpdateInput,
} from 'src/@generated';
import { BuildingSalesSumResponse } from './dto/building-sales-sum.response';
import { SalesAnalyticsResponse } from './dto/sales-analytics.response';
import { SalesService } from './sales.service';

@Resolver(() => Sale)
export class SalesResolver {
  constructor(private readonly salesService: SalesService) {}

  @Mutation(() => Sale)
  createSale(@Args('input') input: SaleUncheckedCreateInput) {
    return this.salesService.create(input);
  }

  @Query(() => [Sale], { name: 'sales' })
  findAll() {
    return this.salesService.findAll();
  }

  @Query(() => Sale, { name: 'sale' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Sale> {
    return this.salesService.findOne(id);
  }

  @Query(() => [SalesAnalyticsResponse], { name: 'salesAnalytics' })
  getSalesAnalytics(
    @Args('propertyType', { type: () => PropertyType })
    propertyType: PropertyType,
  ) {
    return this.salesService.getSalesAnalytics(propertyType);
  }

  @Query(() => BuildingSalesSumResponse, { name: 'getSalesSumByBuildingId' })
  getSalesSumByBuildingId(
    @Args('buildingId', { type: () => Int }) buildingId: number,
  ) {
    return this.salesService.getSalesSumByBuildingId(buildingId);
  }

  @Mutation(() => [Sale], { name: 'saveSales' })
  updateMany(
    @Args('input', { type: () => [SaleUncheckedCreateInput] })
    input: SaleUncheckedCreateInput[],
  ) {
    return this.salesService.saveAll(input);
  }

  @Mutation(() => Sale)
  updateSale(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: SaleUncheckedUpdateInput,
  ) {
    return this.salesService.update(id, input);
  }

  @Mutation(() => Sale)
  removeSale(@Args('id', { type: () => Int }) id: number) {
    return this.salesService.remove(id);
  }
}
