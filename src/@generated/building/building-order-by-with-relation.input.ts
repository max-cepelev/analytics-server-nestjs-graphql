import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CityOrderByWithRelationInput } from '../city/city-order-by-with-relation.input';
import { DistrictOrderByWithRelationInput } from '../district/district-order-by-with-relation.input';
import { DeveloperOrderByWithRelationInput } from '../developer/developer-order-by-with-relation.input';
import { GroupOrderByWithRelationInput } from '../group/group-order-by-with-relation.input';
import { ComplexOrderByWithRelationInput } from '../complex/complex-order-by-with-relation.input';
import { SaleOrderByRelationAggregateInput } from '../sale/sale-order-by-relation-aggregate.input';
import { PropertyOrderByRelationAggregateInput } from '../property/property-order-by-relation-aggregate.input';

@InputType()
export class BuildingOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completionDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyClass?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    decorType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wallMaterial?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domRfId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domClickId?: keyof typeof SortOrder;

    @Field(() => CityOrderByWithRelationInput, {nullable:true})
    city?: CityOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;

    @Field(() => DistrictOrderByWithRelationInput, {nullable:true})
    district?: DistrictOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    districtId?: keyof typeof SortOrder;

    @Field(() => DeveloperOrderByWithRelationInput, {nullable:true})
    developer?: DeveloperOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    developerId?: keyof typeof SortOrder;

    @Field(() => GroupOrderByWithRelationInput, {nullable:true})
    group?: GroupOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;

    @Field(() => ComplexOrderByWithRelationInput, {nullable:true})
    complex?: ComplexOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    complexId?: keyof typeof SortOrder;

    @Field(() => SaleOrderByRelationAggregateInput, {nullable:true})
    sales?: SaleOrderByRelationAggregateInput;

    @Field(() => PropertyOrderByRelationAggregateInput, {nullable:true})
    properties?: PropertyOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
