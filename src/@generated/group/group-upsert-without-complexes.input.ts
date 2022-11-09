import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupUpdateWithoutComplexesInput } from './group-update-without-complexes.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutComplexesInput } from './group-create-without-complexes.input';

@InputType()
export class GroupUpsertWithoutComplexesInput {

    @Field(() => GroupUpdateWithoutComplexesInput, {nullable:false})
    @Type(() => GroupUpdateWithoutComplexesInput)
    update!: GroupUpdateWithoutComplexesInput;

    @Field(() => GroupCreateWithoutComplexesInput, {nullable:false})
    @Type(() => GroupCreateWithoutComplexesInput)
    create!: GroupCreateWithoutComplexesInput;
}
