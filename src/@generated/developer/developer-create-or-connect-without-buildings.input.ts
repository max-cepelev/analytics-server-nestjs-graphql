import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';
import { Type } from 'class-transformer';
import { DeveloperCreateWithoutBuildingsInput } from './developer-create-without-buildings.input';

@InputType()
export class DeveloperCreateOrConnectWithoutBuildingsInput {

    @Field(() => DeveloperWhereUniqueInput, {nullable:false})
    @Type(() => DeveloperWhereUniqueInput)
    where!: DeveloperWhereUniqueInput;

    @Field(() => DeveloperCreateWithoutBuildingsInput, {nullable:false})
    @Type(() => DeveloperCreateWithoutBuildingsInput)
    create!: DeveloperCreateWithoutBuildingsInput;
}
