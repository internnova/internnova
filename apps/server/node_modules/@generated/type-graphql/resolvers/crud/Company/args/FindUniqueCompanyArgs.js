"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyWhereUniqueInput_1 = require("../../../inputs/CompanyWhereUniqueInput");
let FindUniqueCompanyArgs = class FindUniqueCompanyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereUniqueInput_1.CompanyWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereUniqueInput_1.CompanyWhereUniqueInput)
], FindUniqueCompanyArgs.prototype, "where", void 0);
FindUniqueCompanyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], FindUniqueCompanyArgs);
exports.FindUniqueCompanyArgs = FindUniqueCompanyArgs;
