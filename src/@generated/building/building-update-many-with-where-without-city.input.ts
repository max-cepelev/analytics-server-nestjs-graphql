import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingScalarWhereInput } from './building-scalar-where.input';
import { Type } from 'class-transformer';
import { BuildingUpdateManyMutationInput } from './building-update-many-mutation.input';

@InputType()
export class BuildingUpdateManyWithWhereWithoutCityInput {

    @Field(() => BuildingScalarWhereInput, {nullable:false})
    @Type(() => BuildingScalarWhereInput)
    where!: BuildingScalarWhereInput;

    @Field(() => BuildingUpdateManyMutationInput, {nullable:false})
    @Type(() => BuildingUpdateManyMutationInput)
    data!: BuildingUpdateManyMutationInput;
}
