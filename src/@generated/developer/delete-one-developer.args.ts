import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDeveloperArgs {

    @Field(() => DeveloperWhereUniqueInput, {nullable:false})
    @Type(() => DeveloperWhereUniqueInput)
    where!: DeveloperWhereUniqueInput;
}
