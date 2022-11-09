import { registerEnumType } from '@nestjs/graphql';

export enum DeveloperScalarFieldEnum {
    id = "id",
    name = "name",
    fullName = "fullName",
    legalAddress = "legalAddress",
    actualAddress = "actualAddress",
    inn = "inn",
    kpp = "kpp",
    ogrn = "ogrn",
    manager = "manager",
    website = "website",
    phone = "phone",
    email = "email",
    info = "info",
    groupId = "groupId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DeveloperScalarFieldEnum, { name: 'DeveloperScalarFieldEnum', description: undefined })
