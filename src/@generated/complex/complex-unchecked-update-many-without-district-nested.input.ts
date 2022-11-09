import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateWithoutDistrictInput } from './complex-create-without-district.input';
import { Type } from 'class-transformer';
import { ComplexCreateOrConnectWithoutDistrictInput } from './complex-create-or-connect-without-district.input';
import { ComplexUpsertWithWhereUniqueWithoutDistrictInput } from './complex-upsert-with-where-unique-without-district.input';
import { ComplexCreateManyDistrictInputEnvelope } from './complex-create-many-district-input-envelope.input';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { ComplexUpdateWithWhereUniqueWithoutDistrictInput } from './complex-update-with-where-unique-without-district.input';
import { ComplexUpdateManyWithWhereWithoutDistrictInput } from './complex-update-many-with-where-without-district.input';
import { ComplexScalarWhereInput } from './complex-scalar-where.input';

@InputType()
export class ComplexUncheckedUpdateManyWithoutDistrictNestedInput {

    @Field(() => [ComplexCreateWithoutDistrictInput], {nullable:true})
    @Type(() => ComplexCreateWithoutDistrictInput)
    create?: Array<ComplexCreateWithoutDistrictInput>;

    @Field(() => [ComplexCreateOrConnectWithoutDistrictInput], {nullable:true})
    @Type(() => ComplexCreateOrConnectWithoutDistrictInput)
    connectOrCreate?: Array<ComplexCreateOrConnectWithoutDistrictInput>;

    @Field(() => [ComplexUpsertWithWhereUniqueWithoutDistrictInput], {nullable:true})
    @Type(() => ComplexUpsertWithWhereUniqueWithoutDistrictInput)
    upsert?: Array<ComplexUpsertWithWhereUniqueWithoutDistrictInput>;

    @Field(() => ComplexCreateManyDistrictInputEnvelope, {nullable:true})
    @Type(() => ComplexCreateManyDistrictInputEnvelope)
    createMany?: ComplexCreateManyDistrictInputEnvelope;

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

    @Field(() => [ComplexUpdateWithWhereUniqueWithoutDistrictInput], {nullable:true})
    @Type(() => ComplexUpdateWithWhereUniqueWithoutDistrictInput)
    update?: Array<ComplexUpdateWithWhereUniqueWithoutDistrictInput>;

    @Field(() => [ComplexUpdateManyWithWhereWithoutDistrictInput], {nullable:true})
    @Type(() => ComplexUpdateManyWithWhereWithoutDistrictInput)
    updateMany?: Array<ComplexUpdateManyWithWhereWithoutDistrictInput>;

    @Field(() => [ComplexScalarWhereInput], {nullable:true})
    @Type(() => ComplexScalarWhereInput)
    deleteMany?: Array<ComplexScalarWhereInput>;
}
