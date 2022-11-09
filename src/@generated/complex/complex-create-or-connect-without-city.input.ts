import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Type } from 'class-transformer';
import { ComplexCreateWithoutCityInput } from './complex-create-without-city.input';

@InputType()
export class ComplexCreateOrConnectWithoutCityInput {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;

    @Field(() => ComplexCreateWithoutCityInput, {nullable:false})
    @Type(() => ComplexCreateWithoutCityInput)
    create!: ComplexCreateWithoutCityInput;
}
