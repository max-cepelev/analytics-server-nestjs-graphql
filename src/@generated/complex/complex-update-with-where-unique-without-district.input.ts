import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Type } from 'class-transformer';
import { ComplexUpdateWithoutDistrictInput } from './complex-update-without-district.input';

@InputType()
export class ComplexUpdateWithWhereUniqueWithoutDistrictInput {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;

    @Field(() => ComplexUpdateWithoutDistrictInput, {nullable:false})
    @Type(() => ComplexUpdateWithoutDistrictInput)
    data!: ComplexUpdateWithoutDistrictInput;
}
