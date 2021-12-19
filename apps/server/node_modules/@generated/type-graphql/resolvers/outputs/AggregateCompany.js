"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCompany = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const CompanyAvgAggregate_1 = require("../outputs/CompanyAvgAggregate");
const CompanyCountAggregate_1 = require("../outputs/CompanyCountAggregate");
const CompanyMaxAggregate_1 = require("../outputs/CompanyMaxAggregate");
const CompanyMinAggregate_1 = require("../outputs/CompanyMinAggregate");
const CompanySumAggregate_1 = require("../outputs/CompanySumAggregate");
let AggregateCompany = class AggregateCompany {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyCountAggregate_1.CompanyCountAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyCountAggregate_1.CompanyCountAggregate)
], AggregateCompany.prototype, "_count", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyAvgAggregate_1.CompanyAvgAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyAvgAggregate_1.CompanyAvgAggregate)
], AggregateCompany.prototype, "_avg", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanySumAggregate_1.CompanySumAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanySumAggregate_1.CompanySumAggregate)
], AggregateCompany.prototype, "_sum", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyMinAggregate_1.CompanyMinAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyMinAggregate_1.CompanyMinAggregate)
], AggregateCompany.prototype, "_min", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => CompanyMaxAggregate_1.CompanyMaxAggregate, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", CompanyMaxAggregate_1.CompanyMaxAggregate)
], AggregateCompany.prototype, "_max", void 0);
AggregateCompany = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("AggregateCompany", {
        isAbstract: true
    })
], AggregateCompany);
exports.AggregateCompany = AggregateCompany;
