"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpdateCompanyArgs_1 = require("./args/UpdateCompanyArgs");
const Company_1 = require("../../../models/Company");
const helpers_1 = require("../../../helpers");
let UpdateCompanyResolver = class UpdateCompanyResolver {
    async updateCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.update({
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
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateCompanyArgs_1.UpdateCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpdateCompanyResolver.prototype, "updateCompany", null);
UpdateCompanyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], UpdateCompanyResolver);
exports.UpdateCompanyResolver = UpdateCompanyResolver;
