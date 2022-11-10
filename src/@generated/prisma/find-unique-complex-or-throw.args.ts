import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from '../complex/complex-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueComplexOrThrowArgs {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;
}
