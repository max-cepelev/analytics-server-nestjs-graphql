import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SaleWhereInput } from './sale-where.input';

@InputType()
export class SaleListRelationFilter {

    @Field(() => SaleWhereInput, {nullable:true})
    every?: SaleWhereInput;

    @Field(() => SaleWhereInput, {nullable:true})
    some?: SaleWhereInput;

    @Field(() => SaleWhereInput, {nullable:true})
    none?: SaleWhereInput;
}
