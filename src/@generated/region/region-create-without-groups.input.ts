import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateNestedManyWithoutRegionInput } from '../city/city-create-nested-many-without-region.input';

@InputType()
export class RegionCreateWithoutGroupsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CityCreateNestedManyWithoutRegionInput, {nullable:true})
    cities?: CityCreateNestedManyWithoutRegionInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
