import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OfferWhereUniqueInput } from './offer-where-unique.input';
import { Type } from 'class-transformer';
import { OfferCreateInput } from './offer-create.input';
import { OfferUpdateInput } from './offer-update.input';

@ArgsType()
export class UpsertOneOfferArgs {

    @Field(() => OfferWhereUniqueInput, {nullable:false})
    @Type(() => OfferWhereUniqueInput)
    where!: OfferWhereUniqueInput;

    @Field(() => OfferCreateInput, {nullable:false})
    @Type(() => OfferCreateInput)
    create!: OfferCreateInput;

    @Field(() => OfferUpdateInput, {nullable:false})
    @Type(() => OfferUpdateInput)
    update!: OfferUpdateInput;
}
