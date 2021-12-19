"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const AggregateUserArgs_1 = require("./args/AggregateUserArgs");
const User_1 = require("../../../models/User");
const AggregateUser_1 = require("../../outputs/AggregateUser");
const helpers_1 = require("../../../helpers");
let AggregateUserResolver = class AggregateUserResolver {
    async aggregateUser(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Query(_returns => AggregateUser_1.AggregateUser, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, AggregateUserArgs_1.AggregateUserArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], AggregateUserResolver.prototype, "aggregateUser", null);
AggregateUserResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => User_1.User)
], AggregateUserResolver);
exports.AggregateUserResolver = AggregateUserResolver;
