"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateCompanyArgs_1 = require("./args/AggregateCompanyArgs");
const CreateCompanyArgs_1 = require("./args/CreateCompanyArgs");
const CreateManyCompanyArgs_1 = require("./args/CreateManyCompanyArgs");
const DeleteCompanyArgs_1 = require("./args/DeleteCompanyArgs");
const DeleteManyCompanyArgs_1 = require("./args/DeleteManyCompanyArgs");
const FindFirstCompanyArgs_1 = require("./args/FindFirstCompanyArgs");
const FindManyCompanyArgs_1 = require("./args/FindManyCompanyArgs");
const FindUniqueCompanyArgs_1 = require("./args/FindUniqueCompanyArgs");
const GroupByCompanyArgs_1 = require("./args/GroupByCompanyArgs");
const UpdateCompanyArgs_1 = require("./args/UpdateCompanyArgs");
const UpdateManyCompanyArgs_1 = require("./args/UpdateManyCompanyArgs");
const UpsertCompanyArgs_1 = require("./args/UpsertCompanyArgs");
const helpers_1 = require("../../../helpers");
const Company_1 = require("../../../models/Company");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCompany_1 = require("../../outputs/AggregateCompany");
const CompanyGroupBy_1 = require("../../outputs/CompanyGroupBy");
let CompanyCrudResolver = class CompanyCrudResolver {
    async company(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async companies(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateManyCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertCompany(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async aggregateCompany(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).company.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async groupByCompany(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).company.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Company_1.Company, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindUniqueCompanyArgs_1.FindUniqueCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CompanyCrudResolver.prototype, "company", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => Company_1.Company, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, FindFirstCompanyArgs_1.FindFirstCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CompanyCrudResolver.prototype, "findFirstCompany", null);
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
], CompanyCrudResolver.prototype, "companies", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Company_1.Company, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateCompanyArgs_1.CreateCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CompanyCrudResolver.prototype, "createCompany", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateManyCompanyArgs_1.CreateManyCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CompanyCrudResolver.prototype, "createManyCompany", null);
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
], CompanyCrudResolver.prototype, "deleteCompany", null);
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
], CompanyCrudResolver.prototype, "updateCompany", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteManyCompanyArgs_1.DeleteManyCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CompanyCrudResolver.prototype, "deleteManyCompany", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, UpdateManyCompanyArgs_1.UpdateManyCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CompanyCrudResolver.prototype, "updateManyCompany", null);
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
], CompanyCrudResolver.prototype, "upsertCompany", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateCompany_1.AggregateCompany, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateCompanyArgs_1.AggregateCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CompanyCrudResolver.prototype, "aggregateCompany", null);
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [CompanyGroupBy_1.CompanyGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByCompanyArgs_1.GroupByCompanyArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CompanyCrudResolver.prototype, "groupByCompany", null);
CompanyCrudResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], CompanyCrudResolver);
exports.CompanyCrudResolver = CompanyCrudResolver;
