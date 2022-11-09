import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SaleCreateManyInput } from './sale-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySaleArgs {

    @Field(() => [SaleCreateManyInput], {nullable:false})
    @Type(() => SaleCreateManyInput)
    data!: Array<SaleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
