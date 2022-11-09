import { registerEnumType } from '@nestjs/graphql';

export enum WallMaterial {
    MONOLITH_BRICK = "MONOLITH_BRICK",
    BLOCKS = "BLOCKS",
    BRICK = "BRICK",
    PANEL = "PANEL",
    MONOLITH = "MONOLITH"
}


registerEnumType(WallMaterial, { name: 'WallMaterial', description: undefined })
