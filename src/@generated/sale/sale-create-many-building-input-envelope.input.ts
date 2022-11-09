import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SaleCreateManyBuildingInput } from './sale-create-many-building.input';
import { Type } from 'class-transformer';

@InputType()
export class SaleCreateManyBuildingInputEnvelope {

    @Field(() => [SaleCreateManyBuildingInput], {nullable:false})
    @Type(() => SaleCreateManyBuildingInput)
    data!: Array<SaleCreateManyBuildingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
