import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SaleScalarWhereInput } from './sale-scalar-where.input';
import { Type } from 'class-transformer';
import { SaleUpdateManyMutationInput } from './sale-update-many-mutation.input';

@InputType()
export class SaleUpdateManyWithWhereWithoutBuildingInput {

    @Field(() => SaleScalarWhereInput, {nullable:false})
    @Type(() => SaleScalarWhereInput)
    where!: SaleScalarWhereInput;

    @Field(() => SaleUpdateManyMutationInput, {nullable:false})
    @Type(() => SaleUpdateManyMutationInput)
    data!: SaleUpdateManyMutationInput;
}
