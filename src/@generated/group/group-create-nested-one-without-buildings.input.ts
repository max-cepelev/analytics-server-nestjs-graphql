import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutBuildingsInput } from './group-create-without-buildings.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutBuildingsInput } from './group-create-or-connect-without-buildings.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@InputType()
export class GroupCreateNestedOneWithoutBuildingsInput {

    @Field(() => GroupCreateWithoutBuildingsInput, {nullable:true})
    @Type(() => GroupCreateWithoutBuildingsInput)
    create?: GroupCreateWithoutBuildingsInput;

    @Field(() => GroupCreateOrConnectWithoutBuildingsInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutBuildingsInput)
    connectOrCreate?: GroupCreateOrConnectWithoutBuildingsInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;
}
