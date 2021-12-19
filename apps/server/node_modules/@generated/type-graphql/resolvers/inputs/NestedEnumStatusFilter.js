"use strict";
var NestedEnumStatusFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumStatusFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Status_1 = require("../../enums/Status");
let NestedEnumStatusFilter = NestedEnumStatusFilter_1 = class NestedEnumStatusFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Status_1.Status, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumStatusFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Status_1.Status], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumStatusFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Status_1.Status], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumStatusFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumStatusFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumStatusFilter)
], NestedEnumStatusFilter.prototype, "not", void 0);
NestedEnumStatusFilter = NestedEnumStatusFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumStatusFilter", {
        isAbstract: true
    })
], NestedEnumStatusFilter);
exports.NestedEnumStatusFilter = NestedEnumStatusFilter;
