import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SaleWhereUniqueInput } from './sale-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSaleArgs {

    @Field(() => SaleWhereUniqueInput, {nullable:false})
    @Type(() => SaleWhereUniqueInput)
    where!: SaleWhereUniqueInput;
}
