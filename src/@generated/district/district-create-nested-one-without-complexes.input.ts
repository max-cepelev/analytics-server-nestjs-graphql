import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictCreateWithoutComplexesInput } from './district-create-without-complexes.input';
import { Type } from 'class-transformer';
import { DistrictCreateOrConnectWithoutComplexesInput } from './district-create-or-connect-without-complexes.input';
import { DistrictWhereUniqueInput } from './district-where-unique.input';

@InputType()
export class DistrictCreateNestedOneWithoutComplexesInput {

    @Field(() => DistrictCreateWithoutComplexesInput, {nullable:true})
    @Type(() => DistrictCreateWithoutComplexesInput)
    create?: DistrictCreateWithoutComplexesInput;

    @Field(() => DistrictCreateOrConnectWithoutComplexesInput, {nullable:true})
    @Type(() => DistrictCreateOrConnectWithoutComplexesInput)
    connectOrCreate?: DistrictCreateOrConnectWithoutComplexesInput;

    @Field(() => DistrictWhereUniqueInput, {nullable:true})
    @Type(() => DistrictWhereUniqueInput)
    connect?: DistrictWhereUniqueInput;
}
