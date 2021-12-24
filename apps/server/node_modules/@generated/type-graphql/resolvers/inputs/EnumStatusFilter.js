"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumStatusFilter_1 = require("../inputs/NestedEnumStatusFilter");
const Status_1 = require("../../enums/Status");
let EnumStatusFilter = class EnumStatusFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Status_1.Status, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumStatusFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Status_1.Status], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumStatusFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Status_1.Status], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumStatusFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumStatusFilter_1.NestedEnumStatusFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumStatusFilter_1.NestedEnumStatusFilter)
], EnumStatusFilter.prototype, "not", void 0);
EnumStatusFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumStatusFilter", {
        isAbstract: true
    })
], EnumStatusFilter);
exports.EnumStatusFilter = EnumStatusFilter;
