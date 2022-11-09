import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperCreateWithoutGroupInput } from './developer-create-without-group.input';
import { Type } from 'class-transformer';
import { DeveloperCreateOrConnectWithoutGroupInput } from './developer-create-or-connect-without-group.input';
import { DeveloperCreateManyGroupInputEnvelope } from './developer-create-many-group-input-envelope.input';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';

@InputType()
export class DeveloperUncheckedCreateNestedManyWithoutGroupInput {

    @Field(() => [DeveloperCreateWithoutGroupInput], {nullable:true})
    @Type(() => DeveloperCreateWithoutGroupInput)
    create?: Array<DeveloperCreateWithoutGroupInput>;

    @Field(() => [DeveloperCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => DeveloperCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<DeveloperCreateOrConnectWithoutGroupInput>;

    @Field(() => DeveloperCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => DeveloperCreateManyGroupInputEnvelope)
    createMany?: DeveloperCreateManyGroupInputEnvelope;

    @Field(() => [DeveloperWhereUniqueInput], {nullable:true})
    @Type(() => DeveloperWhereUniqueInput)
    connect?: Array<DeveloperWhereUniqueInput>;
}
