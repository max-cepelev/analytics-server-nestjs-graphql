import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Type } from 'class-transformer';
import { ComplexUpdateWithoutDistrictInput } from './complex-update-without-district.input';
import { ComplexCreateWithoutDistrictInput } from './complex-create-without-district.input';

@InputType()
export class ComplexUpsertWithWhereUniqueWithoutDistrictInput {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;

    @Field(() => ComplexUpdateWithoutDistrictInput, {nullable:false})
    @Type(() => ComplexUpdateWithoutDistrictInput)
    update!: ComplexUpdateWithoutDistrictInput;

    @Field(() => ComplexCreateWithoutDistrictInput, {nullable:false})
    @Type(() => ComplexCreateWithoutDistrictInput)
    create!: ComplexCreateWithoutDistrictInput;
}
