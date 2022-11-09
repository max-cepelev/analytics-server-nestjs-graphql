import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexUpdateInput } from './complex-update.input';
import { Type } from 'class-transformer';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';

@ArgsType()
export class UpdateOneComplexArgs {

    @Field(() => ComplexUpdateInput, {nullable:false})
    @Type(() => ComplexUpdateInput)
    data!: ComplexUpdateInput;

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;
}
