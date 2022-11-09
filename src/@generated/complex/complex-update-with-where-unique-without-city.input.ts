import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Type } from 'class-transformer';
import { ComplexUpdateWithoutCityInput } from './complex-update-without-city.input';

@InputType()
export class ComplexUpdateWithWhereUniqueWithoutCityInput {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;

    @Field(() => ComplexUpdateWithoutCityInput, {nullable:false})
    @Type(() => ComplexUpdateWithoutCityInput)
    data!: ComplexUpdateWithoutCityInput;
}
