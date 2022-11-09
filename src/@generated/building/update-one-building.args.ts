import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildingUpdateInput } from './building-update.input';
import { Type } from 'class-transformer';
import { BuildingWhereUniqueInput } from './building-where-unique.input';

@ArgsType()
export class UpdateOneBuildingArgs {

    @Field(() => BuildingUpdateInput, {nullable:false})
    @Type(() => BuildingUpdateInput)
    data!: BuildingUpdateInput;

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;
}
