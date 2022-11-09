import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';
import { Type } from 'class-transformer';
import { DeveloperCreateWithoutGroupInput } from './developer-create-without-group.input';

@InputType()
export class DeveloperCreateOrConnectWithoutGroupInput {

    @Field(() => DeveloperWhereUniqueInput, {nullable:false})
    @Type(() => DeveloperWhereUniqueInput)
    where!: DeveloperWhereUniqueInput;

    @Field(() => DeveloperCreateWithoutGroupInput, {nullable:false})
    @Type(() => DeveloperCreateWithoutGroupInput)
    create!: DeveloperCreateWithoutGroupInput;
}
