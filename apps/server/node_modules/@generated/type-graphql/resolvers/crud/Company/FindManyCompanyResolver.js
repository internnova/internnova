"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const FindManyCompanyArgs_1 = require("./args/FindManyCompanyArgs");
const Company_1 = require("../../../models/Company");
const helpers_1 = require("../../../helpers");
let FindManyCompanyResolver = class FindManyCompanyResolver {
    async companies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [Company_1.Company], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindManyCompanyArgs_1.FindManyCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], FindManyCompanyResolver.prototype, "companies", null);
FindManyCompanyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], FindManyCompanyResolver);
exports.FindManyCompanyResolver = FindManyCompanyResolver;
