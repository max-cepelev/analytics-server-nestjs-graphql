import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeveloperUpdateInput } from './developer-update.input';
import { Type } from 'class-transformer';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';

@ArgsType()
export class UpdateOneDeveloperArgs {

    @Field(() => DeveloperUpdateInput, {nullable:false})
    @Type(() => DeveloperUpdateInput)
    data!: DeveloperUpdateInput;

    @Field(() => DeveloperWhereUniqueInput, {nullable:false})
    @Type(() => DeveloperWhereUniqueInput)
    where!: DeveloperWhereUniqueInput;
}
