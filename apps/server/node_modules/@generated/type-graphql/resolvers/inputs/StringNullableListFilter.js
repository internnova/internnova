"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringNullableListFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let StringNullableListFilter = class StringNullableListFilter {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], StringNullableListFilter.prototype, "equals", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], StringNullableListFilter.prototype, "has", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], StringNullableListFilter.prototype, "hasEvery", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], StringNullableListFilter.prototype, "hasSome", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], StringNullableListFilter.prototype, "isEmpty", void 0);
StringNullableListFilter = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StringNullableListFilter", {
        isAbstract: true
    })
], StringNullableListFilter);
exports.StringNullableListFilter = StringNullableListFilter;
