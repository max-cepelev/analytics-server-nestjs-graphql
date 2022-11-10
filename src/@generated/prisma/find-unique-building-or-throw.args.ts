import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from '../building/building-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBuildingOrThrowArgs {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;
}
