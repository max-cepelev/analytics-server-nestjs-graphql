import { registerEnumType } from '@nestjs/graphql';

export enum BuildingScalarFieldEnum {
    id = "id",
    name = "name",
    address = "address",
    completionDate = "completionDate",
    completed = "completed",
    latitude = "latitude",
    longitude = "longitude",
    propertyClass = "propertyClass",
    decorType = "decorType",
    wallMaterial = "wallMaterial",
    img = "img",
    domRfId = "domRfId",
    domClickId = "domClickId",
    cityId = "cityId",
    districtId = "districtId",
    developerId = "developerId",
    groupId = "groupId",
    complexId = "complexId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BuildingScalarFieldEnum, { name: 'BuildingScalarFieldEnum', description: undefined })
