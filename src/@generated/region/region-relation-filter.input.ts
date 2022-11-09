import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereInput } from './region-where.input';

@InputType()
export class RegionRelationFilter {

    @Field(() => RegionWhereInput, {nullable:true})
    is?: RegionWhereInput;

    @Field(() => RegionWhereInput, {nullable:true})
    isNot?: RegionWhereInput;
}
