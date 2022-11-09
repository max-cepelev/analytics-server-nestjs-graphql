import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateNestedManyWithoutRegionInput } from '../city/city-create-nested-many-without-region.input';
import { GroupCreateNestedManyWithoutRegionsInput } from '../group/group-create-nested-many-without-regions.input';

@InputType()
export class RegionCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CityCreateNestedManyWithoutRegionInput, {nullable:true})
    cities?: CityCreateNestedManyWithoutRegionInput;

    @Field(() => GroupCreateNestedManyWithoutRegionsInput, {nullable:true})
    groups?: GroupCreateNestedManyWithoutRegionsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
