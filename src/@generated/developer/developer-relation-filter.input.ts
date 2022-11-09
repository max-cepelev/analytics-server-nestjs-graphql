import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperWhereInput } from './developer-where.input';

@InputType()
export class DeveloperRelationFilter {

    @Field(() => DeveloperWhereInput, {nullable:true})
    is?: DeveloperWhereInput;

    @Field(() => DeveloperWhereInput, {nullable:true})
    isNot?: DeveloperWhereInput;
}
