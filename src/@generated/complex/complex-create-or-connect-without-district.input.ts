import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Type } from 'class-transformer';
import { ComplexCreateWithoutDistrictInput } from './complex-create-without-district.input';

@InputType()
export class ComplexCreateOrConnectWithoutDistrictInput {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;

    @Field(() => ComplexCreateWithoutDistrictInput, {nullable:false})
    @Type(() => ComplexCreateWithoutDistrictInput)
    create!: ComplexCreateWithoutDistrictInput;
}
