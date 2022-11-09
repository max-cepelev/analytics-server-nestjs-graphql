import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictUpdateWithoutComplexesInput } from './district-update-without-complexes.input';
import { Type } from 'class-transformer';
import { DistrictCreateWithoutComplexesInput } from './district-create-without-complexes.input';

@InputType()
export class DistrictUpsertWithoutComplexesInput {

    @Field(() => DistrictUpdateWithoutComplexesInput, {nullable:false})
    @Type(() => DistrictUpdateWithoutComplexesInput)
    update!: DistrictUpdateWithoutComplexesInput;

    @Field(() => DistrictCreateWithoutComplexesInput, {nullable:false})
    @Type(() => DistrictCreateWithoutComplexesInput)
    create!: DistrictCreateWithoutComplexesInput;
}
