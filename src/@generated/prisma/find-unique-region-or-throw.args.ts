import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionWhereUniqueInput } from '../region/region-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueRegionOrThrowArgs {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: RegionWhereUniqueInput;
}
