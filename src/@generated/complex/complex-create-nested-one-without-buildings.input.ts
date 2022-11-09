import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateWithoutBuildingsInput } from './complex-create-without-buildings.input';
import { Type } from 'class-transformer';
import { ComplexCreateOrConnectWithoutBuildingsInput } from './complex-create-or-connect-without-buildings.input';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';

@InputType()
export class ComplexCreateNestedOneWithoutBuildingsInput {

    @Field(() => ComplexCreateWithoutBuildingsInput, {nullable:true})
    @Type(() => ComplexCreateWithoutBuildingsInput)
    create?: ComplexCreateWithoutBuildingsInput;

    @Field(() => ComplexCreateOrConnectWithoutBuildingsInput, {nullable:true})
    @Type(() => ComplexCreateOrConnectWithoutBuildingsInput)
    connectOrCreate?: ComplexCreateOrConnectWithoutBuildingsInput;

    @Field(() => ComplexWhereUniqueInput, {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    connect?: ComplexWhereUniqueInput;
}
