"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Role_1 = require("../../enums/Role");
let EnumRoleFieldUpdateOperationsInput = class EnumRoleFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumRoleFieldUpdateOperationsInput.prototype, "set", void 0);
EnumRoleFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumRoleFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumRoleFieldUpdateOperationsInput);
exports.EnumRoleFieldUpdateOperationsInput = EnumRoleFieldUpdateOperationsInput;
