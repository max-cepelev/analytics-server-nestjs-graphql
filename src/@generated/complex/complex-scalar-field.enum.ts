import { registerEnumType } from '@nestjs/graphql';

export enum ComplexScalarFieldEnum {
    id = "id",
    name = "name",
    shortName = "shortName",
    website = "website",
    info = "info",
    domRfId = "domRfId",
    domClickId = "domClickId",
    groupId = "groupId",
    cityId = "cityId",
    districtId = "districtId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ComplexScalarFieldEnum, { name: 'ComplexScalarFieldEnum', description: undefined })
