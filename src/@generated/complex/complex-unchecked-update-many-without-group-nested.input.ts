import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateWithoutGroupInput } from './complex-create-without-group.input';
import { Type } from 'class-transformer';
import { ComplexCreateOrConnectWithoutGroupInput } from './complex-create-or-connect-without-group.input';
import { ComplexUpsertWithWhereUniqueWithoutGroupInput } from './complex-upsert-with-where-unique-without-group.input';
import { ComplexCreateManyGroupInputEnvelope } from './complex-create-many-group-input-envelope.input';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { ComplexUpdateWithWhereUniqueWithoutGroupInput } from './complex-update-with-where-unique-without-group.input';
import { ComplexUpdateManyWithWhereWithoutGroupInput } from './complex-update-many-with-where-without-group.input';
import { ComplexScalarWhereInput } from './complex-scalar-where.input';

@InputType()
export class ComplexUncheckedUpdateManyWithoutGroupNestedInput {

    @Field(() => [ComplexCreateWithoutGroupInput], {nullable:true})
    @Type(() => ComplexCreateWithoutGroupInput)
    create?: Array<ComplexCreateWithoutGroupInput>;

    @Field(() => [ComplexCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => ComplexCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<ComplexCreateOrConnectWithoutGroupInput>;

    @Field(() => [ComplexUpsertWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => ComplexUpsertWithWhereUniqueWithoutGroupInput)
    upsert?: Array<ComplexUpsertWithWhereUniqueWithoutGroupInput>;

    @Field(() => ComplexCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => ComplexCreateManyGroupInputEnvelope)
    createMany?: ComplexCreateManyGroupInputEnvelope;

    @Field(() => [ComplexWhereUniqueInput], {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    set?: Array<ComplexWhereUniqueInput>;

    @Field(() => [ComplexWhereUniqueInput], {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    disconnect?: Array<ComplexWhereUniqueInput>;

    @Field(() => [ComplexWhereUniqueInput], {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    delete?: Array<ComplexWhereUniqueInput>;

    @Field(() => [ComplexWhereUniqueInput], {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    connect?: Array<ComplexWhereUniqueInput>;

    @Field(() => [ComplexUpdateWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => ComplexUpdateWithWhereUniqueWithoutGroupInput)
    update?: Array<ComplexUpdateWithWhereUniqueWithoutGroupInput>;

    @Field(() => [ComplexUpdateManyWithWhereWithoutGroupInput], {nullable:true})
    @Type(() => ComplexUpdateManyWithWhereWithoutGroupInput)
    updateMany?: Array<ComplexUpdateManyWithWhereWithoutGroupInput>;

    @Field(() => [ComplexScalarWhereInput], {nullable:true})
    @Type(() => ComplexScalarWhereInput)
    deleteMany?: Array<ComplexScalarWhereInput>;
}
