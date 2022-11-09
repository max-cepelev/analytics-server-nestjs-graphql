import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionCreateInput } from './region-create.input';
import { RegionUpdateInput } from './region-update.input';

@ArgsType()
export class UpsertOneRegionArgs {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: RegionWhereUniqueInput;

    @Field(() => RegionCreateInput, {nullable:false})
    @Type(() => RegionCreateInput)
    create!: RegionCreateInput;

    @Field(() => RegionUpdateInput, {nullable:false})
    @Type(() => RegionUpdateInput)
    update!: RegionUpdateInput;
}
