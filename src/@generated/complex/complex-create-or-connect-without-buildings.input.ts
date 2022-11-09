import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Type } from 'class-transformer';
import { ComplexCreateWithoutBuildingsInput } from './complex-create-without-buildings.input';

@InputType()
export class ComplexCreateOrConnectWithoutBuildingsInput {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;

    @Field(() => ComplexCreateWithoutBuildingsInput, {nullable:false})
    @Type(() => ComplexCreateWithoutBuildingsInput)
    create!: ComplexCreateWithoutBuildingsInput;
}
