import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutRegionsInput } from './group-create-without-regions.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutRegionsInput } from './group-create-or-connect-without-regions.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@InputType()
export class GroupCreateNestedManyWithoutRegionsInput {

    @Field(() => [GroupCreateWithoutRegionsInput], {nullable:true})
    @Type(() => GroupCreateWithoutRegionsInput)
    create?: Array<GroupCreateWithoutRegionsInput>;

    @Field(() => [GroupCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<GroupCreateOrConnectWithoutRegionsInput>;

    @Field(() => [GroupWhereUniqueInput], {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: Array<GroupWhereUniqueInput>;
}
