"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateInput_1 = require("../../../inputs/UserCreateInput");
const UserUpdateInput_1 = require("../../../inputs/UserUpdateInput");
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
let UpsertUserArgs = class UpsertUserArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UpsertUserArgs.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateInput_1.UserCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateInput_1.UserCreateInput)
], UpsertUserArgs.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserUpdateInput_1.UserUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserUpdateInput_1.UserUpdateInput)
], UpsertUserArgs.prototype, "update", void 0);
UpsertUserArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpsertUserArgs);
exports.UpsertUserArgs = UpsertUserArgs;
