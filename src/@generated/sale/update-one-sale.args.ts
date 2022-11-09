import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SaleUpdateInput } from './sale-update.input';
import { Type } from 'class-transformer';
import { SaleWhereUniqueInput } from './sale-where-unique.input';

@ArgsType()
export class UpdateOneSaleArgs {

    @Field(() => SaleUpdateInput, {nullable:false})
    @Type(() => SaleUpdateInput)
    data!: SaleUpdateInput;

    @Field(() => SaleWhereUniqueInput, {nullable:false})
    @Type(() => SaleWhereUniqueInput)
    where!: SaleWhereUniqueInput;
}
