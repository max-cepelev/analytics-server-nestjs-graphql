import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OfferUpdateInput } from './offer-update.input';
import { Type } from 'class-transformer';
import { OfferWhereUniqueInput } from './offer-where-unique.input';

@ArgsType()
export class UpdateOneOfferArgs {

    @Field(() => OfferUpdateInput, {nullable:false})
    @Type(() => OfferUpdateInput)
    data!: OfferUpdateInput;

    @Field(() => OfferWhereUniqueInput, {nullable:false})
    @Type(() => OfferWhereUniqueInput)
    where!: OfferWhereUniqueInput;
}
