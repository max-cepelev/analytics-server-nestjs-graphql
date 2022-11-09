import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SaleCreateWithoutBuildingInput } from './sale-create-without-building.input';
import { Type } from 'class-transformer';
import { SaleCreateOrConnectWithoutBuildingInput } from './sale-create-or-connect-without-building.input';
import { SaleUpsertWithWhereUniqueWithoutBuildingInput } from './sale-upsert-with-where-unique-without-building.input';
import { SaleCreateManyBuildingInputEnvelope } from './sale-create-many-building-input-envelope.input';
import { SaleWhereUniqueInput } from './sale-where-unique.input';
import { SaleUpdateWithWhereUniqueWithoutBuildingInput } from './sale-update-with-where-unique-without-building.input';
import { SaleUpdateManyWithWhereWithoutBuildingInput } from './sale-update-many-with-where-without-building.input';
import { SaleScalarWhereInput } from './sale-scalar-where.input';

@InputType()
export class SaleUncheckedUpdateManyWithoutBuildingNestedInput {

    @Field(() => [SaleCreateWithoutBuildingInput], {nullable:true})
    @Type(() => SaleCreateWithoutBuildingInput)
    create?: Array<SaleCreateWithoutBuildingInput>;

    @Field(() => [SaleCreateOrConnectWithoutBuildingInput], {nullable:true})
    @Type(() => SaleCreateOrConnectWithoutBuildingInput)
    connectOrCreate?: Array<SaleCreateOrConnectWithoutBuildingInput>;

    @Field(() => [SaleUpsertWithWhereUniqueWithoutBuildingInput], {nullable:true})
    @Type(() => SaleUpsertWithWhereUniqueWithoutBuildingInput)
    upsert?: Array<SaleUpsertWithWhereUniqueWithoutBuildingInput>;

    @Field(() => SaleCreateManyBuildingInputEnvelope, {nullable:true})
    @Type(() => SaleCreateManyBuildingInputEnvelope)
    createMany?: SaleCreateManyBuildingInputEnvelope;

    @Field(() => [SaleWhereUniqueInput], {nullable:true})
    @Type(() => SaleWhereUniqueInput)
    set?: Array<SaleWhereUniqueInput>;

    @Field(() => [SaleWhereUniqueInput], {nullable:true})
    @Type(() => SaleWhereUniqueInput)
    disconnect?: Array<SaleWhereUniqueInput>;

    @Field(() => [SaleWhereUniqueInput], {nullable:true})
    @Type(() => SaleWhereUniqueInput)
    delete?: Array<SaleWhereUniqueInput>;

    @Field(() => [SaleWhereUniqueInput], {nullable:true})
    @Type(() => SaleWhereUniqueInput)
    connect?: Array<SaleWhereUniqueInput>;

    @Field(() => [SaleUpdateWithWhereUniqueWithoutBuildingInput], {nullable:true})
    @Type(() => SaleUpdateWithWhereUniqueWithoutBuildingInput)
    update?: Array<SaleUpdateWithWhereUniqueWithoutBuildingInput>;

    @Field(() => [SaleUpdateManyWithWhereWithoutBuildingInput], {nullable:true})
    @Type(() => SaleUpdateManyWithWhereWithoutBuildingInput)
    updateMany?: Array<SaleUpdateManyWithWhereWithoutBuildingInput>;

    @Field(() => [SaleScalarWhereInput], {nullable:true})
    @Type(() => SaleScalarWhereInput)
    deleteMany?: Array<SaleScalarWhereInput>;
}
