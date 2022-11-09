import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutSalesInput } from './building-create-without-sales.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutSalesInput } from './building-create-or-connect-without-sales.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';

@InputType()
export class BuildingCreateNestedOneWithoutSalesInput {

    @Field(() => BuildingCreateWithoutSalesInput, {nullable:true})
    @Type(() => BuildingCreateWithoutSalesInput)
    create?: BuildingCreateWithoutSalesInput;

    @Field(() => BuildingCreateOrConnectWithoutSalesInput, {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutSalesInput)
    connectOrCreate?: BuildingCreateOrConnectWithoutSalesInput;

    @Field(() => BuildingWhereUniqueInput, {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: BuildingWhereUniqueInput;
}
