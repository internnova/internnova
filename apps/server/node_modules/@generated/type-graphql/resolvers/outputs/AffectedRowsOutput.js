"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffectedRowsOutput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let AffectedRowsOutput = class AffectedRowsOutput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AffectedRowsOutput.prototype, "count", void 0);
AffectedRowsOutput = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AffectedRowsOutput", {
        isAbstract: true
    })
], AffectedRowsOutput);
exports.AffectedRowsOutput = AffectedRowsOutput;
