"use strict";
var NestedEnumRoleFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedEnumRoleFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Role_1 = require("../../enums/Role");
let NestedEnumRoleFilter = NestedEnumRoleFilter_1 = class NestedEnumRoleFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Role_1.Role, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], NestedEnumRoleFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumRoleFilter.prototype, "in", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [Role_1.Role], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], NestedEnumRoleFilter.prototype, "notIn", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => NestedEnumRoleFilter_1, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", NestedEnumRoleFilter)
], NestedEnumRoleFilter.prototype, "not", void 0);
NestedEnumRoleFilter = NestedEnumRoleFilter_1 = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("NestedEnumRoleFilter", {
        isAbstract: true
    })
], NestedEnumRoleFilter);
exports.NestedEnumRoleFilter = NestedEnumRoleFilter;
