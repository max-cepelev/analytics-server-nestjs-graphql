import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Type } from 'class-transformer';
import { ComplexUpdateWithoutGroupInput } from './complex-update-without-group.input';

@InputType()
export class ComplexUpdateWithWhereUniqueWithoutGroupInput {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;

    @Field(() => ComplexUpdateWithoutGroupInput, {nullable:false})
    @Type(() => ComplexUpdateWithoutGroupInput)
    data!: ComplexUpdateWithoutGroupInput;
}
