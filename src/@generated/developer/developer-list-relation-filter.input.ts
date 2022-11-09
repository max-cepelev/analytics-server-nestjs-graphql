import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperWhereInput } from './developer-where.input';

@InputType()
export class DeveloperListRelationFilter {

    @Field(() => DeveloperWhereInput, {nullable:true})
    every?: DeveloperWhereInput;

    @Field(() => DeveloperWhereInput, {nullable:true})
    some?: DeveloperWhereInput;

    @Field(() => DeveloperWhereInput, {nullable:true})
    none?: DeveloperWhereInput;
}
