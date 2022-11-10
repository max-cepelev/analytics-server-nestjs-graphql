import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionWhereInput } from '../region/region-where.input';
import { Type } from 'class-transformer';
import { RegionOrderByWithRelationInput } from '../region/region-order-by-with-relation.input';
import { RegionWhereUniqueInput } from '../region/region-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RegionScalarFieldEnum } from '../region/region-scalar-field.enum';

@ArgsType()
export class FindFirstRegionOrThrowArgs {

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;

    @Field(() => [RegionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RegionOrderByWithRelationInput>;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    cursor?: RegionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RegionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RegionScalarFieldEnum>;
}
