import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OfferWhereInput } from '../offer/offer-where.input';
import { Type } from 'class-transformer';
import { OfferOrderByWithRelationInput } from '../offer/offer-order-by-with-relation.input';
import { OfferWhereUniqueInput } from '../offer/offer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OfferScalarFieldEnum } from '../offer/offer-scalar-field.enum';

@ArgsType()
export class FindFirstOfferOrThrowArgs {

    @Field(() => OfferWhereInput, {nullable:true})
    @Type(() => OfferWhereInput)
    where?: OfferWhereInput;

    @Field(() => [OfferOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OfferOrderByWithRelationInput>;

    @Field(() => OfferWhereUniqueInput, {nullable:true})
    cursor?: OfferWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OfferScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OfferScalarFieldEnum>;
}
