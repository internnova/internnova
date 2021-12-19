"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyCompanyArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyCreateManyInput_1 = require("../../../inputs/CompanyCreateManyInput");
let CreateManyCompanyArgs = class CreateManyCompanyArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [CompanyCreateManyInput_1.CompanyCreateManyInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], CreateManyCompanyArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], CreateManyCompanyArgs.prototype, "skipDuplicates", void 0);
CreateManyCompanyArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateManyCompanyArgs);
exports.CreateManyCompanyArgs = CreateManyCompanyArgs;
