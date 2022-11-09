import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutGroupInput } from './building-create-without-group.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutGroupInput } from './building-create-or-connect-without-group.input';
import { BuildingCreateManyGroupInputEnvelope } from './building-create-many-group-input-envelope.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';

@InputType()
export class BuildingCreateNestedManyWithoutGroupInput {

    @Field(() => [BuildingCreateWithoutGroupInput], {nullable:true})
    @Type(() => BuildingCreateWithoutGroupInput)
    create?: Array<BuildingCreateWithoutGroupInput>;

    @Field(() => [BuildingCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<BuildingCreateOrConnectWithoutGroupInput>;

    @Field(() => BuildingCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => BuildingCreateManyGroupInputEnvelope)
    createMany?: BuildingCreateManyGroupInputEnvelope;

    @Field(() => [BuildingWhereUniqueInput], {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: Array<BuildingWhereUniqueInput>;
}
