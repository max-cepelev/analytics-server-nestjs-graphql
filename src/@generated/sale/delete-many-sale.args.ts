import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SaleWhereInput } from './sale-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySaleArgs {

    @Field(() => SaleWhereInput, {nullable:true})
    @Type(() => SaleWhereInput)
    where?: SaleWhereInput;
}
