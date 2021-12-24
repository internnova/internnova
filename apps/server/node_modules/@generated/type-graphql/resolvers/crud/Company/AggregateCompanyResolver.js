"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCompanyResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateCompanyArgs_1 = require("./args/AggregateCompanyArgs");
const Company_1 = require("../../../models/Company");
const AggregateCompany_1 = require("../../outputs/AggregateCompany");
const helpers_1 = require("../../../helpers");
let AggregateCompanyResolver = class AggregateCompanyResolver {
    async aggregateCompany(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).company.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
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
], AggregateCompanyResolver.prototype, "aggregateCompany", null);
AggregateCompanyResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Company_1.Company)
], AggregateCompanyResolver);
exports.AggregateCompanyResolver = AggregateCompanyResolver;
