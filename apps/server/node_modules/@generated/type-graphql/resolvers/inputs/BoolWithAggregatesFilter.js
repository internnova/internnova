"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoolWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const NestedBoolFilter_1 = require("../inputs/NestedBoolFilter");
const NestedBoolWithAggregatesFilter_1 = require("../inputs/NestedBoolWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let BoolWithAggregatesFilter = class BoolWithAggregatesFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], BoolWithAggregatesFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedBoolWithAggregatesFilter_1.NestedBoolWithAggregatesFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedBoolWithAggregatesFilter_1.NestedBoolWithAggregatesFilter)
], BoolWithAggregatesFilter.prototype, "not", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedIntFilter_1.NestedIntFilter)
], BoolWithAggregatesFilter.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedBoolFilter_1.NestedBoolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedBoolFilter_1.NestedBoolFilter)
], BoolWithAggregatesFilter.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedBoolFilter_1.NestedBoolFilter, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedBoolFilter_1.NestedBoolFilter)
], BoolWithAggregatesFilter.prototype, "_max", void 0);
BoolWithAggregatesFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("BoolWithAggregatesFilter", {
        isAbstract: true
    })
], BoolWithAggregatesFilter);
exports.BoolWithAggregatesFilter = BoolWithAggregatesFilter;
