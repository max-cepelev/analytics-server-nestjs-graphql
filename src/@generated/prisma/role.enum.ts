import { registerEnumType } from '@nestjs/graphql';

export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
    EDITOR = "EDITOR"
}


registerEnumType(Role, { name: 'Role', description: undefined })
