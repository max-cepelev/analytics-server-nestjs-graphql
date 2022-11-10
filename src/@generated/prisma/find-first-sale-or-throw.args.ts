import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SaleWhereInput } from '../sale/sale-where.input';
import { Type } from 'class-transformer';
import { SaleOrderByWithRelationInput } from '../sale/sale-order-by-with-relation.input';
import { SaleWhereUniqueInput } from '../sale/sale-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SaleScalarFieldEnum } from '../sale/sale-scalar-field.enum';

@ArgsType()
export class FindFirstSaleOrThrowArgs {

    @Field(() => SaleWhereInput, {nullable:true})
    @Type(() => SaleWhereInput)
    where?: SaleWhereInput;

    @Field(() => [SaleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SaleOrderByWithRelationInput>;

    @Field(() => SaleWhereUniqueInput, {nullable:true})
    cursor?: SaleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SaleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SaleScalarFieldEnum>;
}
