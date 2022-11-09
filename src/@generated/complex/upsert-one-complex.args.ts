import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Type } from 'class-transformer';
import { ComplexCreateInput } from './complex-create.input';
import { ComplexUpdateInput } from './complex-update.input';

@ArgsType()
export class UpsertOneComplexArgs {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;

    @Field(() => ComplexCreateInput, {nullable:false})
    @Type(() => ComplexCreateInput)
    create!: ComplexCreateInput;

    @Field(() => ComplexUpdateInput, {nullable:false})
    @Type(() => ComplexUpdateInput)
    update!: ComplexUpdateInput;
}
