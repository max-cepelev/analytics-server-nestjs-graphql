import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictCreateWithoutComplexesInput } from './district-create-without-complexes.input';
import { Type } from 'class-transformer';
import { DistrictCreateOrConnectWithoutComplexesInput } from './district-create-or-connect-without-complexes.input';
import { DistrictUpsertWithoutComplexesInput } from './district-upsert-without-complexes.input';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { DistrictUpdateWithoutComplexesInput } from './district-update-without-complexes.input';

@InputType()
export class DistrictUpdateOneRequiredWithoutComplexesNestedInput {

    @Field(() => DistrictCreateWithoutComplexesInput, {nullable:true})
    @Type(() => DistrictCreateWithoutComplexesInput)
    create?: DistrictCreateWithoutComplexesInput;

    @Field(() => DistrictCreateOrConnectWithoutComplexesInput, {nullable:true})
    @Type(() => DistrictCreateOrConnectWithoutComplexesInput)
    connectOrCreate?: DistrictCreateOrConnectWithoutComplexesInput;

    @Field(() => DistrictUpsertWithoutComplexesInput, {nullable:true})
    @Type(() => DistrictUpsertWithoutComplexesInput)
    upsert?: DistrictUpsertWithoutComplexesInput;

    @Field(() => DistrictWhereUniqueInput, {nullable:true})
    @Type(() => DistrictWhereUniqueInput)
    connect?: DistrictWhereUniqueInput;

    @Field(() => DistrictUpdateWithoutComplexesInput, {nullable:true})
    @Type(() => DistrictUpdateWithoutComplexesInput)
    update?: DistrictUpdateWithoutComplexesInput;
}
