import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeveloperWhereUniqueInput } from '../developer/developer-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDeveloperOrThrowArgs {

    @Field(() => DeveloperWhereUniqueInput, {nullable:false})
    @Type(() => DeveloperWhereUniqueInput)
    where!: DeveloperWhereUniqueInput;
}
