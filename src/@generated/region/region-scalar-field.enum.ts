import { registerEnumType } from '@nestjs/graphql';

export enum RegionScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RegionScalarFieldEnum, { name: 'RegionScalarFieldEnum', description: undefined })
