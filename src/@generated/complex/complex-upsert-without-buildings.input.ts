import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexUpdateWithoutBuildingsInput } from './complex-update-without-buildings.input';
import { Type } from 'class-transformer';
import { ComplexCreateWithoutBuildingsInput } from './complex-create-without-buildings.input';

@InputType()
export class ComplexUpsertWithoutBuildingsInput {

    @Field(() => ComplexUpdateWithoutBuildingsInput, {nullable:false})
    @Type(() => ComplexUpdateWithoutBuildingsInput)
    update!: ComplexUpdateWithoutBuildingsInput;

    @Field(() => ComplexCreateWithoutBuildingsInput, {nullable:false})
    @Type(() => ComplexCreateWithoutBuildingsInput)
    create!: ComplexCreateWithoutBuildingsInput;
}
