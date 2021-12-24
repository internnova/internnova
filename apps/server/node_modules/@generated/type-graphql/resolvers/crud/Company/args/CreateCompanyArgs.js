"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateInput_1 = require("../../../inputs/CompanyCreateInput");
let CreateCompanyArgs = class CreateCompanyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCreateInput_1.CompanyCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCreateInput_1.CompanyCreateInput)
], CreateCompanyArgs.prototype, "data", void 0);
CreateCompanyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateCompanyArgs);
exports.CreateCompanyArgs = CreateCompanyArgs;
