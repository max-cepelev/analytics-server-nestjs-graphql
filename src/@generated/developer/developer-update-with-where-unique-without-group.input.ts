import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';
import { Type } from 'class-transformer';
import { DeveloperUpdateWithoutGroupInput } from './developer-update-without-group.input';

@InputType()
export class DeveloperUpdateWithWhereUniqueWithoutGroupInput {

    @Field(() => DeveloperWhereUniqueInput, {nullable:false})
    @Type(() => DeveloperWhereUniqueInput)
    where!: DeveloperWhereUniqueInput;

    @Field(() => DeveloperUpdateWithoutGroupInput, {nullable:false})
    @Type(() => DeveloperUpdateWithoutGroupInput)
    data!: DeveloperUpdateWithoutGroupInput;
}
