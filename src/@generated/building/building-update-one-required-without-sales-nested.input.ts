import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutSalesInput } from './building-create-without-sales.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutSalesInput } from './building-create-or-connect-without-sales.input';
import { BuildingUpsertWithoutSalesInput } from './building-upsert-without-sales.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { BuildingUpdateWithoutSalesInput } from './building-update-without-sales.input';

@InputType()
export class BuildingUpdateOneRequiredWithoutSalesNestedInput {

    @Field(() => BuildingCreateWithoutSalesInput, {nullable:true})
    @Type(() => BuildingCreateWithoutSalesInput)
    create?: BuildingCreateWithoutSalesInput;

    @Field(() => BuildingCreateOrConnectWithoutSalesInput, {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutSalesInput)
    connectOrCreate?: BuildingCreateOrConnectWithoutSalesInput;

    @Field(() => BuildingUpsertWithoutSalesInput, {nullable:true})
    @Type(() => BuildingUpsertWithoutSalesInput)
    upsert?: BuildingUpsertWithoutSalesInput;

    @Field(() => BuildingWhereUniqueInput, {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: BuildingWhereUniqueInput;

    @Field(() => BuildingUpdateWithoutSalesInput, {nullable:true})
    @Type(() => BuildingUpdateWithoutSalesInput)
    update?: BuildingUpdateWithoutSalesInput;
}
