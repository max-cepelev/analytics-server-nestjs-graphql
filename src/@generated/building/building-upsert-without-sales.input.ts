import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingUpdateWithoutSalesInput } from './building-update-without-sales.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutSalesInput } from './building-create-without-sales.input';

@InputType()
export class BuildingUpsertWithoutSalesInput {

    @Field(() => BuildingUpdateWithoutSalesInput, {nullable:false})
    @Type(() => BuildingUpdateWithoutSalesInput)
    update!: BuildingUpdateWithoutSalesInput;

    @Field(() => BuildingCreateWithoutSalesInput, {nullable:false})
    @Type(() => BuildingCreateWithoutSalesInput)
    create!: BuildingCreateWithoutSalesInput;
}
