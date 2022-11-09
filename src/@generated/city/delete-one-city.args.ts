import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneCityArgs {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: CityWhereUniqueInput;
}
