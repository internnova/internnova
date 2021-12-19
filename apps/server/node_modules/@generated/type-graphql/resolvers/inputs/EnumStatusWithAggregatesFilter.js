"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumStatusFilter_1 = require("../inputs/NestedEnumStatusFilter");
const NestedEnumStatusWithAggregatesFilter_1 = require("../inputs/NestedEnumStatusWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Status_1 = require("../../enums/Status");
let EnumStatusWithAggregatesFilter = class EnumStatusWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Status_1.Status, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EnumStatusWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Status_1.Status], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumStatusWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Status_1.Status], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], EnumStatusWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumStatusWithAggregatesFilter_1.NestedEnumStatusWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumStatusWithAggregatesFilter_1.NestedEnumStatusWithAggregatesFilter)
], EnumStatusWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], EnumStatusWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumStatusFilter_1.NestedEnumStatusFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumStatusFilter_1.NestedEnumStatusFilter)
], EnumStatusWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumStatusFilter_1.NestedEnumStatusFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumStatusFilter_1.NestedEnumStatusFilter)
], EnumStatusWithAggregatesFilter.prototype, "_max", void 0);
EnumStatusWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("EnumStatusWithAggregatesFilter", {
        isAbstract: true
    })
], EnumStatusWithAggregatesFilter);
exports.EnumStatusWithAggregatesFilter = EnumStatusWithAggregatesFilter;
