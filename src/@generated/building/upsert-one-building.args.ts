import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingCreateInput } from './building-create.input';
import { BuildingUpdateInput } from './building-update.input';

@ArgsType()
export class UpsertOneBuildingArgs {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingCreateInput, {nullable:false})
    @Type(() => BuildingCreateInput)
    create!: BuildingCreateInput;

    @Field(() => BuildingUpdateInput, {nullable:false})
    @Type(() => BuildingUpdateInput)
    update!: BuildingUpdateInput;
}
