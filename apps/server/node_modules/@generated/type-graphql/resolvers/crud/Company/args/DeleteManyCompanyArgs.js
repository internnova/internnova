"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyWhereInput_1 = require("../../../inputs/CompanyWhereInput");
let DeleteManyCompanyArgs = class DeleteManyCompanyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyWhereInput_1.CompanyWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyWhereInput_1.CompanyWhereInput)
], DeleteManyCompanyArgs.prototype, "where", void 0);
DeleteManyCompanyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyCompanyArgs);
exports.DeleteManyCompanyArgs = DeleteManyCompanyArgs;
