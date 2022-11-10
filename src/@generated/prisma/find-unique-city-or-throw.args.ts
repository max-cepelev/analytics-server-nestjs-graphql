import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from '../city/city-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCityOrThrowArgs {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: CityWhereUniqueInput;
}
