import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperCreateWithoutBuildingsInput } from './developer-create-without-buildings.input';
import { Type } from 'class-transformer';
import { DeveloperCreateOrConnectWithoutBuildingsInput } from './developer-create-or-connect-without-buildings.input';
import { DeveloperUpsertWithoutBuildingsInput } from './developer-upsert-without-buildings.input';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';
import { DeveloperUpdateWithoutBuildingsInput } from './developer-update-without-buildings.input';

@InputType()
export class DeveloperUpdateOneRequiredWithoutBuildingsNestedInput {

    @Field(() => DeveloperCreateWithoutBuildingsInput, {nullable:true})
    @Type(() => DeveloperCreateWithoutBuildingsInput)
    create?: DeveloperCreateWithoutBuildingsInput;

    @Field(() => DeveloperCreateOrConnectWithoutBuildingsInput, {nullable:true})
    @Type(() => DeveloperCreateOrConnectWithoutBuildingsInput)
    connectOrCreate?: DeveloperCreateOrConnectWithoutBuildingsInput;

    @Field(() => DeveloperUpsertWithoutBuildingsInput, {nullable:true})
    @Type(() => DeveloperUpsertWithoutBuildingsInput)
    upsert?: DeveloperUpsertWithoutBuildingsInput;

    @Field(() => DeveloperWhereUniqueInput, {nullable:true})
    @Type(() => DeveloperWhereUniqueInput)
    connect?: DeveloperWhereUniqueInput;

    @Field(() => DeveloperUpdateWithoutBuildingsInput, {nullable:true})
    @Type(() => DeveloperUpdateWithoutBuildingsInput)
    update?: DeveloperUpdateWithoutBuildingsInput;
}
