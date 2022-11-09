import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexCreateInput } from './complex-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneComplexArgs {

    @Field(() => ComplexCreateInput, {nullable:false})
    @Type(() => ComplexCreateInput)
    data!: ComplexCreateInput;
}
