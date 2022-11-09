import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';
import { Type } from 'class-transformer';
import { DeveloperUpdateWithoutGroupInput } from './developer-update-without-group.input';
import { DeveloperCreateWithoutGroupInput } from './developer-create-without-group.input';

@InputType()
export class DeveloperUpsertWithWhereUniqueWithoutGroupInput {

    @Field(() => DeveloperWhereUniqueInput, {nullable:false})
    @Type(() => DeveloperWhereUniqueInput)
    where!: DeveloperWhereUniqueInput;

    @Field(() => DeveloperUpdateWithoutGroupInput, {nullable:false})
    @Type(() => DeveloperUpdateWithoutGroupInput)
    update!: DeveloperUpdateWithoutGroupInput;

    @Field(() => DeveloperCreateWithoutGroupInput, {nullable:false})
    @Type(() => DeveloperCreateWithoutGroupInput)
    create!: DeveloperCreateWithoutGroupInput;
}
