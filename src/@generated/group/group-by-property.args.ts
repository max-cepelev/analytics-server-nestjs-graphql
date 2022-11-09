import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyWhereInput } from '../property/property-where.input';
import { Type } from 'class-transformer';
import { PropertyOrderByWithAggregationInput } from '../property/property-order-by-with-aggregation.input';
import { PropertyScalarFieldEnum } from '../property/property-scalar-field.enum';
import { PropertyScalarWhereWithAggregatesInput } from '../property/property-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByPropertyArgs {

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;

    @Field(() => [PropertyOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PropertyOrderByWithAggregationInput>;

    @Field(() => [PropertyScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PropertyScalarFieldEnum>;

    @Field(() => PropertyScalarWhereWithAggregatesInput, {nullable:true})
    having?: PropertyScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
