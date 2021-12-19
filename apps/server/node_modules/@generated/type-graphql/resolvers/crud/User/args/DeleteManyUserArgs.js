"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserWhereInput_1 = require("../../../inputs/UserWhereInput");
let DeleteManyUserArgs = class DeleteManyUserArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", UserWhereInput_1.UserWhereInput)
], DeleteManyUserArgs.prototype, "where", void 0);
DeleteManyUserArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], DeleteManyUserArgs);
exports.DeleteManyUserArgs = DeleteManyUserArgs;
