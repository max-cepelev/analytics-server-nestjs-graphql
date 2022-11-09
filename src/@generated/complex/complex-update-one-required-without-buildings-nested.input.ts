import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateWithoutBuildingsInput } from './complex-create-without-buildings.input';
import { Type } from 'class-transformer';
import { ComplexCreateOrConnectWithoutBuildingsInput } from './complex-create-or-connect-without-buildings.input';
import { ComplexUpsertWithoutBuildingsInput } from './complex-upsert-without-buildings.input';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { ComplexUpdateWithoutBuildingsInput } from './complex-update-without-buildings.input';

@InputType()
export class ComplexUpdateOneRequiredWithoutBuildingsNestedInput {

    @Field(() => ComplexCreateWithoutBuildingsInput, {nullable:true})
    @Type(() => ComplexCreateWithoutBuildingsInput)
    create?: ComplexCreateWithoutBuildingsInput;

    @Field(() => ComplexCreateOrConnectWithoutBuildingsInput, {nullable:true})
    @Type(() => ComplexCreateOrConnectWithoutBuildingsInput)
    connectOrCreate?: ComplexCreateOrConnectWithoutBuildingsInput;

    @Field(() => ComplexUpsertWithoutBuildingsInput, {nullable:true})
    @Type(() => ComplexUpsertWithoutBuildingsInput)
    upsert?: ComplexUpsertWithoutBuildingsInput;

    @Field(() => ComplexWhereUniqueInput, {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    connect?: ComplexWhereUniqueInput;

    @Field(() => ComplexUpdateWithoutBuildingsInput, {nullable:true})
    @Type(() => ComplexUpdateWithoutBuildingsInput)
    update?: ComplexUpdateWithoutBuildingsInput;
}
