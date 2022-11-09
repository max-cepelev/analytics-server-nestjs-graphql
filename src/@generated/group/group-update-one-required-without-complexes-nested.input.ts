import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutComplexesInput } from './group-create-without-complexes.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutComplexesInput } from './group-create-or-connect-without-complexes.input';
import { GroupUpsertWithoutComplexesInput } from './group-upsert-without-complexes.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateWithoutComplexesInput } from './group-update-without-complexes.input';

@InputType()
export class GroupUpdateOneRequiredWithoutComplexesNestedInput {

    @Field(() => GroupCreateWithoutComplexesInput, {nullable:true})
    @Type(() => GroupCreateWithoutComplexesInput)
    create?: GroupCreateWithoutComplexesInput;

    @Field(() => GroupCreateOrConnectWithoutComplexesInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutComplexesInput)
    connectOrCreate?: GroupCreateOrConnectWithoutComplexesInput;

    @Field(() => GroupUpsertWithoutComplexesInput, {nullable:true})
    @Type(() => GroupUpsertWithoutComplexesInput)
    upsert?: GroupUpsertWithoutComplexesInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutComplexesInput, {nullable:true})
    @Type(() => GroupUpdateWithoutComplexesInput)
    update?: GroupUpdateWithoutComplexesInput;
}
