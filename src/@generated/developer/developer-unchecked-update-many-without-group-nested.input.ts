import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperCreateWithoutGroupInput } from './developer-create-without-group.input';
import { Type } from 'class-transformer';
import { DeveloperCreateOrConnectWithoutGroupInput } from './developer-create-or-connect-without-group.input';
import { DeveloperUpsertWithWhereUniqueWithoutGroupInput } from './developer-upsert-with-where-unique-without-group.input';
import { DeveloperCreateManyGroupInputEnvelope } from './developer-create-many-group-input-envelope.input';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';
import { DeveloperUpdateWithWhereUniqueWithoutGroupInput } from './developer-update-with-where-unique-without-group.input';
import { DeveloperUpdateManyWithWhereWithoutGroupInput } from './developer-update-many-with-where-without-group.input';
import { DeveloperScalarWhereInput } from './developer-scalar-where.input';

@InputType()
export class DeveloperUncheckedUpdateManyWithoutGroupNestedInput {

    @Field(() => [DeveloperCreateWithoutGroupInput], {nullable:true})
    @Type(() => DeveloperCreateWithoutGroupInput)
    create?: Array<DeveloperCreateWithoutGroupInput>;

    @Field(() => [DeveloperCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => DeveloperCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<DeveloperCreateOrConnectWithoutGroupInput>;

    @Field(() => [DeveloperUpsertWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => DeveloperUpsertWithWhereUniqueWithoutGroupInput)
    upsert?: Array<DeveloperUpsertWithWhereUniqueWithoutGroupInput>;

    @Field(() => DeveloperCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => DeveloperCreateManyGroupInputEnvelope)
    createMany?: DeveloperCreateManyGroupInputEnvelope;

    @Field(() => [DeveloperWhereUniqueInput], {nullable:true})
    @Type(() => DeveloperWhereUniqueInput)
    set?: Array<DeveloperWhereUniqueInput>;

    @Field(() => [DeveloperWhereUniqueInput], {nullable:true})
    @Type(() => DeveloperWhereUniqueInput)
    disconnect?: Array<DeveloperWhereUniqueInput>;

    @Field(() => [DeveloperWhereUniqueInput], {nullable:true})
    @Type(() => DeveloperWhereUniqueInput)
    delete?: Array<DeveloperWhereUniqueInput>;

    @Field(() => [DeveloperWhereUniqueInput], {nullable:true})
    @Type(() => DeveloperWhereUniqueInput)
    connect?: Array<DeveloperWhereUniqueInput>;

    @Field(() => [DeveloperUpdateWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => DeveloperUpdateWithWhereUniqueWithoutGroupInput)
    update?: Array<DeveloperUpdateWithWhereUniqueWithoutGroupInput>;

    @Field(() => [DeveloperUpdateManyWithWhereWithoutGroupInput], {nullable:true})
    @Type(() => DeveloperUpdateManyWithWhereWithoutGroupInput)
    updateMany?: Array<DeveloperUpdateManyWithWhereWithoutGroupInput>;

    @Field(() => [DeveloperScalarWhereInput], {nullable:true})
    @Type(() => DeveloperScalarWhereInput)
    deleteMany?: Array<DeveloperScalarWhereInput>;
}
