import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutBuildingsInput } from './group-create-without-buildings.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutBuildingsInput } from './group-create-or-connect-without-buildings.input';
import { GroupUpsertWithoutBuildingsInput } from './group-upsert-without-buildings.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateWithoutBuildingsInput } from './group-update-without-buildings.input';

@InputType()
export class GroupUpdateOneRequiredWithoutBuildingsNestedInput {

    @Field(() => GroupCreateWithoutBuildingsInput, {nullable:true})
    @Type(() => GroupCreateWithoutBuildingsInput)
    create?: GroupCreateWithoutBuildingsInput;

    @Field(() => GroupCreateOrConnectWithoutBuildingsInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutBuildingsInput)
    connectOrCreate?: GroupCreateOrConnectWithoutBuildingsInput;

    @Field(() => GroupUpsertWithoutBuildingsInput, {nullable:true})
    @Type(() => GroupUpsertWithoutBuildingsInput)
    upsert?: GroupUpsertWithoutBuildingsInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutBuildingsInput, {nullable:true})
    @Type(() => GroupUpdateWithoutBuildingsInput)
    update?: GroupUpdateWithoutBuildingsInput;
}
