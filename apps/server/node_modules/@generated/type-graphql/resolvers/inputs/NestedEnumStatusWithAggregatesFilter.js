"use strict";
var NestedEnumStatusWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumStatusWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedEnumStatusFilter_1 = require("../inputs/NestedEnumStatusFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const Status_1 = require("../../enums/Status");
let NestedEnumStatusWithAggregatesFilter = NestedEnumStatusWithAggregatesFilter_1 = class NestedEnumStatusWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Status_1.Status, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumStatusWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Status_1.Status], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumStatusWithAggregatesFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Status_1.Status], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumStatusWithAggregatesFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumStatusWithAggregatesFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumStatusWithAggregatesFilter)
], NestedEnumStatusWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedEnumStatusWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumStatusFilter_1.NestedEnumStatusFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumStatusFilter_1.NestedEnumStatusFilter)
], NestedEnumStatusWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumStatusFilter_1.NestedEnumStatusFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumStatusFilter_1.NestedEnumStatusFilter)
], NestedEnumStatusWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumStatusWithAggregatesFilter = NestedEnumStatusWithAggregatesFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumStatusWithAggregatesFilter", {
        isAbstract: true
    })
], NestedEnumStatusWithAggregatesFilter);
exports.NestedEnumStatusWithAggregatesFilter = NestedEnumStatusWithAggregatesFilter;
