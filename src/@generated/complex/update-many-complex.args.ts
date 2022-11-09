import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexUpdateManyMutationInput } from './complex-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ComplexWhereInput } from './complex-where.input';

@ArgsType()
export class UpdateManyComplexArgs {

    @Field(() => ComplexUpdateManyMutationInput, {nullable:false})
    @Type(() => ComplexUpdateManyMutationInput)
    data!: ComplexUpdateManyMutationInput;

    @Field(() => ComplexWhereInput, {nullable:true})
    @Type(() => ComplexWhereInput)
    where?: ComplexWhereInput;
}
