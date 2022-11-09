import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OfferWhereInput } from './offer-where.input';
import { Type } from 'class-transformer';
import { OfferOrderByWithRelationInput } from './offer-order-by-with-relation.input';
import { OfferWhereUniqueInput } from './offer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OfferScalarFieldEnum } from './offer-scalar-field.enum';

@ArgsType()
export class FindManyOfferArgs {

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
