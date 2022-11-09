import { registerEnumType } from '@nestjs/graphql';

export enum SaleScalarFieldEnum {
    id = "id",
    month = "month",
    year = "year",
    amount = "amount",
    area = "area",
    sum = "sum",
    propertyType = "propertyType",
    buildingId = "buildingId"
}


registerEnumType(SaleScalarFieldEnum, { name: 'SaleScalarFieldEnum', description: undefined })
