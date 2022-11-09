import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SaleWhereUniqueInput } from './sale-where-unique.input';
import { Type } from 'class-transformer';
import { SaleCreateInput } from './sale-create.input';
import { SaleUpdateInput } from './sale-update.input';

@ArgsType()
export class UpsertOneSaleArgs {

    @Field(() => SaleWhereUniqueInput, {nullable:false})
    @Type(() => SaleWhereUniqueInput)
    where!: SaleWhereUniqueInput;

    @Field(() => SaleCreateInput, {nullable:false})
    @Type(() => SaleCreateInput)
    create!: SaleCreateInput;

    @Field(() => SaleUpdateInput, {nullable:false})
    @Type(() => SaleUpdateInput)
    update!: SaleUpdateInput;
}
