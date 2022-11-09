import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { CityCreateInput } from './city-create.input';
import { CityUpdateInput } from './city-update.input';

@ArgsType()
export class UpsertOneCityArgs {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: CityWhereUniqueInput;

    @Field(() => CityCreateInput, {nullable:false})
    @Type(() => CityCreateInput)
    create!: CityCreateInput;

    @Field(() => CityUpdateInput, {nullable:false})
    @Type(() => CityUpdateInput)
    update!: CityUpdateInput;
}
