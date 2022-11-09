import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionUpdateManyMutationInput } from './region-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RegionWhereInput } from './region-where.input';

@ArgsType()
export class UpdateManyRegionArgs {

    @Field(() => RegionUpdateManyMutationInput, {nullable:false})
    @Type(() => RegionUpdateManyMutationInput)
    data!: RegionUpdateManyMutationInput;

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;
}
