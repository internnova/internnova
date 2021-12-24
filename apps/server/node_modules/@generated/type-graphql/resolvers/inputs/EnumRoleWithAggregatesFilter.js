"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumRoleFilter_1 = require("../inputs/NestedEnumRoleFilter");
const NestedEnumRoleWithAggregatesFilter_1 = require("../inputs/NestedEnumRoleWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Role_1 = require("../../enums/Role");
let EnumRoleWithAggregatesFilter = class EnumRoleWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumRoleWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumRoleWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumRoleWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumRoleWithAggregatesFilter_1.NestedEnumRoleWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumRoleWithAggregatesFilter_1.NestedEnumRoleWithAggregatesFilter)
], EnumRoleWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumRoleWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1.NestedEnumRoleFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumRoleFilter_1.NestedEnumRoleFilter)
], EnumRoleWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1.NestedEnumRoleFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumRoleFilter_1.NestedEnumRoleFilter)
], EnumRoleWithAggregatesFilter.prototype, "_max", void 0);
EnumRoleWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumRoleWithAggregatesFilter", {
        isAbstract: true
    })
], EnumRoleWithAggregatesFilter);
exports.EnumRoleWithAggregatesFilter = EnumRoleWithAggregatesFilter;
