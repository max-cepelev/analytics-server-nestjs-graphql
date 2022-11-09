import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutComplexInput } from './building-create-without-complex.input';

@InputType()
export class BuildingCreateOrConnectWithoutComplexInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingCreateWithoutComplexInput, {nullable:false})
    @Type(() => BuildingCreateWithoutComplexInput)
    create!: BuildingCreateWithoutComplexInput;
}
