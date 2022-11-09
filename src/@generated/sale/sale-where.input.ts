import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumPropertyTypeFilter } from '../prisma/enum-property-type-filter.input';
import { BuildingRelationFilter } from '../building/building-relation-filter.input';

@InputType()
export class SaleWhereInput {

    @Field(() => [SaleWhereInput], {nullable:true})
    AND?: Array<SaleWhereInput>;

    @Field(() => [SaleWhereInput], {nullable:true})
    OR?: Array<SaleWhereInput>;

    @Field(() => [SaleWhereInput], {nullable:true})
    NOT?: Array<SaleWhereInput>;

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

    @Field(() => BuildingRelationFilter, {nullable:true})
    building?: BuildingRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    buildingId?: IntFilter;
}
