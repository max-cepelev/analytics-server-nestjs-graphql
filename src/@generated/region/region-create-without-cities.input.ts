import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateNestedManyWithoutRegionsInput } from '../group/group-create-nested-many-without-regions.input';

@InputType()
export class RegionCreateWithoutCitiesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GroupCreateNestedManyWithoutRegionsInput, {nullable:true})
    groups?: GroupCreateNestedManyWithoutRegionsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
