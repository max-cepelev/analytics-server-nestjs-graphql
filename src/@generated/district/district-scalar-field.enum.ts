import { registerEnumType } from '@nestjs/graphql';

export enum DistrictScalarFieldEnum {
    id = "id",
    name = "name",
    cityId = "cityId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DistrictScalarFieldEnum, { name: 'DistrictScalarFieldEnum', description: undefined })
