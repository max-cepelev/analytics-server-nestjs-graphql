import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneComplexArgs {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;
}
