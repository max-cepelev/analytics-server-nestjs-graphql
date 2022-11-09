import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutDeveloperInput } from './building-create-without-developer.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutDeveloperInput } from './building-create-or-connect-without-developer.input';
import { BuildingCreateManyDeveloperInputEnvelope } from './building-create-many-developer-input-envelope.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';

@InputType()
export class BuildingCreateNestedManyWithoutDeveloperInput {

    @Field(() => [BuildingCreateWithoutDeveloperInput], {nullable:true})
    @Type(() => BuildingCreateWithoutDeveloperInput)
    create?: Array<BuildingCreateWithoutDeveloperInput>;

    @Field(() => [BuildingCreateOrConnectWithoutDeveloperInput], {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutDeveloperInput)
    connectOrCreate?: Array<BuildingCreateOrConnectWithoutDeveloperInput>;

    @Field(() => BuildingCreateManyDeveloperInputEnvelope, {nullable:true})
    @Type(() => BuildingCreateManyDeveloperInputEnvelope)
    createMany?: BuildingCreateManyDeveloperInputEnvelope;

    @Field(() => [BuildingWhereUniqueInput], {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: Array<BuildingWhereUniqueInput>;
}
