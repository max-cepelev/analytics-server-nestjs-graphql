import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexScalarWhereInput } from './complex-scalar-where.input';
import { Type } from 'class-transformer';
import { ComplexUpdateManyMutationInput } from './complex-update-many-mutation.input';

@InputType()
export class ComplexUpdateManyWithWhereWithoutGroupInput {

    @Field(() => ComplexScalarWhereInput, {nullable:false})
    @Type(() => ComplexScalarWhereInput)
    where!: ComplexScalarWhereInput;

    @Field(() => ComplexUpdateManyMutationInput, {nullable:false})
    @Type(() => ComplexUpdateManyMutationInput)
    data!: ComplexUpdateManyMutationInput;
}
