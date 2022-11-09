import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { Type } from 'class-transformer';
import { DistrictCreateWithoutComplexesInput } from './district-create-without-complexes.input';

@InputType()
export class DistrictCreateOrConnectWithoutComplexesInput {

    @Field(() => DistrictWhereUniqueInput, {nullable:false})
    @Type(() => DistrictWhereUniqueInput)
    where!: DistrictWhereUniqueInput;

    @Field(() => DistrictCreateWithoutComplexesInput, {nullable:false})
    @Type(() => DistrictCreateWithoutComplexesInput)
    create!: DistrictCreateWithoutComplexesInput;
}
