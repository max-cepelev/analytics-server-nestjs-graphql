import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SaleWhereUniqueInput } from './sale-where-unique.input';
import { Type } from 'class-transformer';
import { SaleCreateWithoutBuildingInput } from './sale-create-without-building.input';

@InputType()
export class SaleCreateOrConnectWithoutBuildingInput {

    @Field(() => SaleWhereUniqueInput, {nullable:false})
    @Type(() => SaleWhereUniqueInput)
    where!: SaleWhereUniqueInput;

    @Field(() => SaleCreateWithoutBuildingInput, {nullable:false})
    @Type(() => SaleCreateWithoutBuildingInput)
    create!: SaleCreateWithoutBuildingInput;
}
