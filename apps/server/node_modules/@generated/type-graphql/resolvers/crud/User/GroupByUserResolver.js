"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const GroupByUserArgs_1 = require("./args/GroupByUserArgs");
const User_1 = require("../../../models/User");
const UserGroupBy_1 = require("../../outputs/UserGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByUserResolver = class GroupByUserResolver {
    async groupByUser(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => [UserGroupBy_1.UserGroupBy], {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, GroupByUserArgs_1.GroupByUserArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], GroupByUserResolver.prototype, "groupByUser", null);
GroupByUserResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => User_1.User)
], GroupByUserResolver);
exports.GroupByUserResolver = GroupByUserResolver;
