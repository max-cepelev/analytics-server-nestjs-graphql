import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperCreateWithoutBuildingsInput } from './developer-create-without-buildings.input';
import { Type } from 'class-transformer';
import { DeveloperCreateOrConnectWithoutBuildingsInput } from './developer-create-or-connect-without-buildings.input';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';

@InputType()
export class DeveloperCreateNestedOneWithoutBuildingsInput {

    @Field(() => DeveloperCreateWithoutBuildingsInput, {nullable:true})
    @Type(() => DeveloperCreateWithoutBuildingsInput)
    create?: DeveloperCreateWithoutBuildingsInput;

    @Field(() => DeveloperCreateOrConnectWithoutBuildingsInput, {nullable:true})
    @Type(() => DeveloperCreateOrConnectWithoutBuildingsInput)
    connectOrCreate?: DeveloperCreateOrConnectWithoutBuildingsInput;

    @Field(() => DeveloperWhereUniqueInput, {nullable:true})
    @Type(() => DeveloperWhereUniqueInput)
    connect?: DeveloperWhereUniqueInput;
}
