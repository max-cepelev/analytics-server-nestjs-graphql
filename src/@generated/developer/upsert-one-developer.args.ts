import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';
import { Type } from 'class-transformer';
import { DeveloperCreateInput } from './developer-create.input';
import { DeveloperUpdateInput } from './developer-update.input';

@ArgsType()
export class UpsertOneDeveloperArgs {

    @Field(() => DeveloperWhereUniqueInput, {nullable:false})
    @Type(() => DeveloperWhereUniqueInput)
    where!: DeveloperWhereUniqueInput;

    @Field(() => DeveloperCreateInput, {nullable:false})
    @Type(() => DeveloperCreateInput)
    create!: DeveloperCreateInput;

    @Field(() => DeveloperUpdateInput, {nullable:false})
    @Type(() => DeveloperUpdateInput)
    update!: DeveloperUpdateInput;
}
