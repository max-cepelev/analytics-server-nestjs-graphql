import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildingUpdateManyMutationInput } from './building-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BuildingWhereInput } from './building-where.input';

@ArgsType()
export class UpdateManyBuildingArgs {

    @Field(() => BuildingUpdateManyMutationInput, {nullable:false})
    @Type(() => BuildingUpdateManyMutationInput)
    data!: BuildingUpdateManyMutationInput;

    @Field(() => BuildingWhereInput, {nullable:true})
    @Type(() => BuildingWhereInput)
    where?: BuildingWhereInput;
}
