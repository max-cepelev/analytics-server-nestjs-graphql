import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupScalarWhereInput } from './group-scalar-where.input';
import { Type } from 'class-transformer';
import { GroupUpdateManyMutationInput } from './group-update-many-mutation.input';

@InputType()
export class GroupUpdateManyWithWhereWithoutRegionsInput {

    @Field(() => GroupScalarWhereInput, {nullable:false})
    @Type(() => GroupScalarWhereInput)
    where!: GroupScalarWhereInput;

    @Field(() => GroupUpdateManyMutationInput, {nullable:false})
    @Type(() => GroupUpdateManyMutationInput)
    data!: GroupUpdateManyMutationInput;
}
