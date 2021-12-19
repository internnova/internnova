"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyWhereInput_1 = require("../inputs/CompanyWhereInput");
let CompanyRelationFilter = class CompanyRelationFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereInput_1.CompanyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereInput_1.CompanyWhereInput)
], CompanyRelationFilter.prototype, "is", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereInput_1.CompanyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereInput_1.CompanyWhereInput)
], CompanyRelationFilter.prototype, "isNot", void 0);
CompanyRelationFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("CompanyRelationFilter", {
        isAbstract: true
    })
], CompanyRelationFilter);
exports.CompanyRelationFilter = CompanyRelationFilter;
