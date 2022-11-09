import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OfferWhereUniqueInput } from './offer-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueOfferArgs {

    @Field(() => OfferWhereUniqueInput, {nullable:false})
    @Type(() => OfferWhereUniqueInput)
    where!: OfferWhereUniqueInput;
}
