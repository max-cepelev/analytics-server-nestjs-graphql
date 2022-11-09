import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutComplexesInput } from './group-create-without-complexes.input';

@InputType()
export class GroupCreateOrConnectWithoutComplexesInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupCreateWithoutComplexesInput, {nullable:false})
    @Type(() => GroupCreateWithoutComplexesInput)
    create!: GroupCreateWithoutComplexesInput;
}
