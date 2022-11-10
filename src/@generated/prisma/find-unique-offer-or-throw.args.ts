import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OfferWhereUniqueInput } from '../offer/offer-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueOfferOrThrowArgs {

    @Field(() => OfferWhereUniqueInput, {nullable:false})
    @Type(() => OfferWhereUniqueInput)
    where!: OfferWhereUniqueInput;
}
