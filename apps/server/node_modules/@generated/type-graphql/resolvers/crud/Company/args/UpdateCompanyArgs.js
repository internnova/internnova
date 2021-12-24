"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyUpdateInput_1 = require("../../../inputs/CompanyUpdateInput");
const CompanyWhereUniqueInput_1 = require("../../../inputs/CompanyWhereUniqueInput");
let UpdateCompanyArgs = class UpdateCompanyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyUpdateInput_1.CompanyUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyUpdateInput_1.CompanyUpdateInput)
], UpdateCompanyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], UpdateCompanyArgs.prototype, "where", void 0);
UpdateCompanyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateCompanyArgs);
exports.UpdateCompanyArgs = UpdateCompanyArgs;
