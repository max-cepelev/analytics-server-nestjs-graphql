import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutComplexesInput } from './group-create-without-complexes.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutComplexesInput } from './group-create-or-connect-without-complexes.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@InputType()
export class GroupCreateNestedOneWithoutComplexesInput {

    @Field(() => GroupCreateWithoutComplexesInput, {nullable:true})
    @Type(() => GroupCreateWithoutComplexesInput)
    create?: GroupCreateWithoutComplexesInput;

    @Field(() => GroupCreateOrConnectWithoutComplexesInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutComplexesInput)
    connectOrCreate?: GroupCreateOrConnectWithoutComplexesInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;
}
