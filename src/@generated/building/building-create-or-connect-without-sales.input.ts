import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutSalesInput } from './building-create-without-sales.input';

@InputType()
export class BuildingCreateOrConnectWithoutSalesInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingCreateWithoutSalesInput, {nullable:false})
    @Type(() => BuildingCreateWithoutSalesInput)
    create!: BuildingCreateWithoutSalesInput;
}
