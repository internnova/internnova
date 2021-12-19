"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const UpsertCompanyArgs_1 = require("./args/UpsertCompanyArgs");
const Company_1 = require("../../../models/Company");
const helpers_1 = require("../../../helpers");
let UpsertCompanyResolver = class UpsertCompanyResolver {
    async upsertCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Company_1.Company, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpsertCompanyArgs_1.UpsertCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UpsertCompanyResolver.prototype, "upsertCompany", null);
UpsertCompanyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], UpsertCompanyResolver);
exports.UpsertCompanyResolver = UpsertCompanyResolver;
