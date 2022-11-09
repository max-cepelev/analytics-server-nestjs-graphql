import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingUpdateWithoutComplexInput } from './building-update-without-complex.input';

@InputType()
export class BuildingUpdateWithWhereUniqueWithoutComplexInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingUpdateWithoutComplexInput, {nullable:false})
    @Type(() => BuildingUpdateWithoutComplexInput)
    data!: BuildingUpdateWithoutComplexInput;
}
