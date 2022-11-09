import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SaleCreateWithoutBuildingInput } from './sale-create-without-building.input';
import { Type } from 'class-transformer';
import { SaleCreateOrConnectWithoutBuildingInput } from './sale-create-or-connect-without-building.input';
import { SaleCreateManyBuildingInputEnvelope } from './sale-create-many-building-input-envelope.input';
import { SaleWhereUniqueInput } from './sale-where-unique.input';

@InputType()
export class SaleUncheckedCreateNestedManyWithoutBuildingInput {

    @Field(() => [SaleCreateWithoutBuildingInput], {nullable:true})
    @Type(() => SaleCreateWithoutBuildingInput)
    create?: Array<SaleCreateWithoutBuildingInput>;

    @Field(() => [SaleCreateOrConnectWithoutBuildingInput], {nullable:true})
    @Type(() => SaleCreateOrConnectWithoutBuildingInput)
    connectOrCreate?: Array<SaleCreateOrConnectWithoutBuildingInput>;

    @Field(() => SaleCreateManyBuildingInputEnvelope, {nullable:true})
    @Type(() => SaleCreateManyBuildingInputEnvelope)
    createMany?: SaleCreateManyBuildingInputEnvelope;

    @Field(() => [SaleWhereUniqueInput], {nullable:true})
    @Type(() => SaleWhereUniqueInput)
    connect?: Array<SaleWhereUniqueInput>;
}
