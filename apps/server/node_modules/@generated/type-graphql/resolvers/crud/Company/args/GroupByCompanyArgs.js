"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyOrderByWithAggregationInput_1 = require("../../../inputs/CompanyOrderByWithAggregationInput");
const CompanyScalarWhereWithAggregatesInput_1 = require("../../../inputs/CompanyScalarWhereWithAggregatesInput");
const CompanyWhereInput_1 = require("../../../inputs/CompanyWhereInput");
const CompanyScalarFieldEnum_1 = require("../../../../enums/CompanyScalarFieldEnum");
let GroupByCompanyArgs = class GroupByCompanyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereInput_1.CompanyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereInput_1.CompanyWhereInput)
], GroupByCompanyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyOrderByWithAggregationInput_1.CompanyOrderByWithAggregationInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByCompanyArgs.prototype, "orderBy", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyScalarFieldEnum_1.CompanyScalarFieldEnum], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], GroupByCompanyArgs.prototype, "by", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyScalarWhereWithAggregatesInput_1.CompanyScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyScalarWhereWithAggregatesInput_1.CompanyScalarWhereWithAggregatesInput)
], GroupByCompanyArgs.prototype, "having", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByCompanyArgs.prototype, "take", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], GroupByCompanyArgs.prototype, "skip", void 0);
GroupByCompanyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], GroupByCompanyArgs);
exports.GroupByCompanyArgs = GroupByCompanyArgs;
