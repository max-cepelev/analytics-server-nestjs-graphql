import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeveloperWhereInput } from './developer-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDeveloperArgs {

    @Field(() => DeveloperWhereInput, {nullable:true})
    @Type(() => DeveloperWhereInput)
    where?: DeveloperWhereInput;
}
