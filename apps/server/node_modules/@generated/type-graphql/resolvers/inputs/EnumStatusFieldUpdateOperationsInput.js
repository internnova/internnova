"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumStatusFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Status_1 = require("../../enums/Status");
let EnumStatusFieldUpdateOperationsInput = class EnumStatusFieldUpdateOperationsInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Status_1.Status, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumStatusFieldUpdateOperationsInput.prototype, "set", void 0);
EnumStatusFieldUpdateOperationsInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumStatusFieldUpdateOperationsInput", {
        isAbstract: true
    })
], EnumStatusFieldUpdateOperationsInput);
exports.EnumStatusFieldUpdateOperationsInput = EnumStatusFieldUpdateOperationsInput;
