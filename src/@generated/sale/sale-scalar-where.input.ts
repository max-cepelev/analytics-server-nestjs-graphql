import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumPropertyTypeFilter } from '../prisma/enum-property-type-filter.input';

@InputType()
export class SaleScalarWhereInput {

    @Field(() => [SaleScalarWhereInput], {nullable:true})
    AND?: Array<SaleScalarWhereInput>;

    @Field(() => [SaleScalarWhereInput], {nullable:true})
    OR?: Array<SaleScalarWhereInput>;

    @Field(() => [SaleScalarWhereInput], {nullable:true})
    NOT?: Array<SaleScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    month?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    year?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    amount?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    area?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    sum?: FloatFilter;

    @Field(() => EnumPropertyTypeFilter, {nullable:true})
    propertyType?: EnumPropertyTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    buildingId?: IntFilter;
}
