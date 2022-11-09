import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexWhereInput } from './complex-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyComplexArgs {

    @Field(() => ComplexWhereInput, {nullable:true})
    @Type(() => ComplexWhereInput)
    where?: ComplexWhereInput;
}
