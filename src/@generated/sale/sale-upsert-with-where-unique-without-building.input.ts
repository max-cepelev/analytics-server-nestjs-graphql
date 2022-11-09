import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SaleWhereUniqueInput } from './sale-where-unique.input';
import { Type } from 'class-transformer';
import { SaleUpdateWithoutBuildingInput } from './sale-update-without-building.input';
import { SaleCreateWithoutBuildingInput } from './sale-create-without-building.input';

@InputType()
export class SaleUpsertWithWhereUniqueWithoutBuildingInput {

    @Field(() => SaleWhereUniqueInput, {nullable:false})
    @Type(() => SaleWhereUniqueInput)
    where!: SaleWhereUniqueInput;

    @Field(() => SaleUpdateWithoutBuildingInput, {nullable:false})
    @Type(() => SaleUpdateWithoutBuildingInput)
    update!: SaleUpdateWithoutBuildingInput;

    @Field(() => SaleCreateWithoutBuildingInput, {nullable:false})
    @Type(() => SaleCreateWithoutBuildingInput)
    create!: SaleCreateWithoutBuildingInput;
}
