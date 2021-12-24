"use strict";
var NestedDateTimeFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let NestedDateTimeFilter = NestedDateTimeFilter_1 = class NestedDateTimeFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], NestedDateTimeFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedDateTimeFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedDateTimeFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], NestedDateTimeFilter.prototype, "lt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], NestedDateTimeFilter.prototype, "lte", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], NestedDateTimeFilter.prototype, "gt", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], NestedDateTimeFilter.prototype, "gte", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedDateTimeFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedDateTimeFilter)
], NestedDateTimeFilter.prototype, "not", void 0);
NestedDateTimeFilter = NestedDateTimeFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedDateTimeFilter", {
        isAbstract: true
    })
], NestedDateTimeFilter);
exports.NestedDateTimeFilter = NestedDateTimeFilter;
