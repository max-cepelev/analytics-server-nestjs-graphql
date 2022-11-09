import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeveloperUpdateManyMutationInput } from './developer-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DeveloperWhereInput } from './developer-where.input';

@ArgsType()
export class UpdateManyDeveloperArgs {

    @Field(() => DeveloperUpdateManyMutationInput, {nullable:false})
    @Type(() => DeveloperUpdateManyMutationInput)
    data!: DeveloperUpdateManyMutationInput;

    @Field(() => DeveloperWhereInput, {nullable:true})
    @Type(() => DeveloperWhereInput)
    where?: DeveloperWhereInput;
}
