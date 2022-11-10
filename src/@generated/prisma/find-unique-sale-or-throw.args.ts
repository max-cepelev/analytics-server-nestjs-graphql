import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SaleWhereUniqueInput } from '../sale/sale-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSaleOrThrowArgs {

    @Field(() => SaleWhereUniqueInput, {nullable:false})
    @Type(() => SaleWhereUniqueInput)
    where!: SaleWhereUniqueInput;
}
