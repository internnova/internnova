"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateInput_1 = require("../../../inputs/CompanyCreateInput");
const CompanyUpdateInput_1 = require("../../../inputs/CompanyUpdateInput");
const CompanyWhereUniqueInput_1 = require("../../../inputs/CompanyWhereUniqueInput");
let UpsertCompanyArgs = class UpsertCompanyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], UpsertCompanyArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateInput_1.CompanyCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateInput_1.CompanyCreateInput)
], UpsertCompanyArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyUpdateInput_1.CompanyUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyUpdateInput_1.CompanyUpdateInput)
], UpsertCompanyArgs.prototype, "update", void 0);
UpsertCompanyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertCompanyArgs);
exports.UpsertCompanyArgs = UpsertCompanyArgs;
