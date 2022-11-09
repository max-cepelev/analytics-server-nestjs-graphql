import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SaleCreateInput } from './sale-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSaleArgs {

    @Field(() => SaleCreateInput, {nullable:false})
    @Type(() => SaleCreateInput)
    data!: SaleCreateInput;
}
