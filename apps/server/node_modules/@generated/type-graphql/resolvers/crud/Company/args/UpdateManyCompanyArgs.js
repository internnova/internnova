"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyUpdateManyMutationInput_1 = require("../../../inputs/CompanyUpdateManyMutationInput");
const CompanyWhereInput_1 = require("../../../inputs/CompanyWhereInput");
let UpdateManyCompanyArgs = class UpdateManyCompanyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyUpdateManyMutationInput_1.CompanyUpdateManyMutationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", CompanyUpdateManyMutationInput_1.CompanyUpdateManyMutationInput)
], UpdateManyCompanyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereInput_1.CompanyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereInput_1.CompanyWhereInput)
], UpdateManyCompanyArgs.prototype, "where", void 0);
UpdateManyCompanyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateManyCompanyArgs);
exports.UpdateManyCompanyArgs = UpdateManyCompanyArgs;
