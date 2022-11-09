import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperScalarWhereInput } from './developer-scalar-where.input';
import { Type } from 'class-transformer';
import { DeveloperUpdateManyMutationInput } from './developer-update-many-mutation.input';

@InputType()
export class DeveloperUpdateManyWithWhereWithoutGroupInput {

    @Field(() => DeveloperScalarWhereInput, {nullable:false})
    @Type(() => DeveloperScalarWhereInput)
    where!: DeveloperScalarWhereInput;

    @Field(() => DeveloperUpdateManyMutationInput, {nullable:false})
    @Type(() => DeveloperUpdateManyMutationInput)
    data!: DeveloperUpdateManyMutationInput;
}
