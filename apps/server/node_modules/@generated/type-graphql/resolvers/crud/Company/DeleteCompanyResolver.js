"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteCompanyArgs_1 = require("./args/DeleteCompanyArgs");
const Company_1 = require("../../../models/Company");
const helpers_1 = require("../../../helpers");
let DeleteCompanyResolver = class DeleteCompanyResolver {
    async deleteCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Company_1.Company, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteCompanyArgs_1.DeleteCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteCompanyResolver.prototype, "deleteCompany", null);
DeleteCompanyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], DeleteCompanyResolver);
exports.DeleteCompanyResolver = DeleteCompanyResolver;
