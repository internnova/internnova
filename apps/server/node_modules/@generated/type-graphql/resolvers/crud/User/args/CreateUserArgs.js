"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateInput_1 = require("../../../inputs/UserCreateInput");
let CreateUserArgs = class CreateUserArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateInput_1.UserCreateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateInput_1.UserCreateInput)
], CreateUserArgs.prototype, "data", void 0);
CreateUserArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], CreateUserArgs);
exports.CreateUserArgs = CreateUserArgs;
