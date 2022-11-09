import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperUpdateWithoutBuildingsInput } from './developer-update-without-buildings.input';
import { Type } from 'class-transformer';
import { DeveloperCreateWithoutBuildingsInput } from './developer-create-without-buildings.input';

@InputType()
export class DeveloperUpsertWithoutBuildingsInput {

    @Field(() => DeveloperUpdateWithoutBuildingsInput, {nullable:false})
    @Type(() => DeveloperUpdateWithoutBuildingsInput)
    update!: DeveloperUpdateWithoutBuildingsInput;

    @Field(() => DeveloperCreateWithoutBuildingsInput, {nullable:false})
    @Type(() => DeveloperCreateWithoutBuildingsInput)
    create!: DeveloperCreateWithoutBuildingsInput;
}
