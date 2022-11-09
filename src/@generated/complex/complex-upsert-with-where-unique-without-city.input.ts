import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Type } from 'class-transformer';
import { ComplexUpdateWithoutCityInput } from './complex-update-without-city.input';
import { ComplexCreateWithoutCityInput } from './complex-create-without-city.input';

@InputType()
export class ComplexUpsertWithWhereUniqueWithoutCityInput {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;

    @Field(() => ComplexUpdateWithoutCityInput, {nullable:false})
    @Type(() => ComplexUpdateWithoutCityInput)
    update!: ComplexUpdateWithoutCityInput;

    @Field(() => ComplexCreateWithoutCityInput, {nullable:false})
    @Type(() => ComplexCreateWithoutCityInput)
    create!: ComplexCreateWithoutCityInput;
}
