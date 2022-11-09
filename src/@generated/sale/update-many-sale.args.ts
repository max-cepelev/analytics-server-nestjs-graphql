import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SaleUpdateManyMutationInput } from './sale-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SaleWhereInput } from './sale-where.input';

@ArgsType()
export class UpdateManySaleArgs {

    @Field(() => SaleUpdateManyMutationInput, {nullable:false})
    @Type(() => SaleUpdateManyMutationInput)
    data!: SaleUpdateManyMutationInput;

    @Field(() => SaleWhereInput, {nullable:true})
    @Type(() => SaleWhereInput)
    where?: SaleWhereInput;
}
