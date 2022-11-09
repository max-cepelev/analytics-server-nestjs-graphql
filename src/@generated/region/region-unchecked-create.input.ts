import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CityUncheckedCreateNestedManyWithoutRegionInput } from '../city/city-unchecked-create-nested-many-without-region.input';
import { GroupUncheckedCreateNestedManyWithoutRegionsInput } from '../group/group-unchecked-create-nested-many-without-regions.input';

@InputType()
export class RegionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CityUncheckedCreateNestedManyWithoutRegionInput, {nullable:true})
    cities?: CityUncheckedCreateNestedManyWithoutRegionInput;

    @Field(() => GroupUncheckedCreateNestedManyWithoutRegionsInput, {nullable:true})
    groups?: GroupUncheckedCreateNestedManyWithoutRegionsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
