import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutComplexInput } from './building-create-without-complex.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutComplexInput } from './building-create-or-connect-without-complex.input';
import { BuildingCreateManyComplexInputEnvelope } from './building-create-many-complex-input-envelope.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';

@InputType()
export class BuildingCreateNestedManyWithoutComplexInput {

    @Field(() => [BuildingCreateWithoutComplexInput], {nullable:true})
    @Type(() => BuildingCreateWithoutComplexInput)
    create?: Array<BuildingCreateWithoutComplexInput>;

    @Field(() => [BuildingCreateOrConnectWithoutComplexInput], {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutComplexInput)
    connectOrCreate?: Array<BuildingCreateOrConnectWithoutComplexInput>;

    @Field(() => BuildingCreateManyComplexInputEnvelope, {nullable:true})
    @Type(() => BuildingCreateManyComplexInputEnvelope)
    createMany?: BuildingCreateManyComplexInputEnvelope;

    @Field(() => [BuildingWhereUniqueInput], {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: Array<BuildingWhereUniqueInput>;
}
