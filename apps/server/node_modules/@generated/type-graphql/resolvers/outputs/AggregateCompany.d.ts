import { CompanyAvgAggregate } from "../outputs/CompanyAvgAggregate";
import { CompanyCountAggregate } from "../outputs/CompanyCountAggregate";
import { CompanyMaxAggregate } from "../outputs/CompanyMaxAggregate";
import { CompanyMinAggregate } from "../outputs/CompanyMinAggregate";
import { CompanySumAggregate } from "../outputs/CompanySumAggregate";
export declare class AggregateCompany {
    _count: CompanyCountAggregate | null;
    _avg: CompanyAvgAggregate | null;
    _sum: CompanySumAggregate | null;
    _min: CompanyMinAggregate | null;
    _max: CompanyMaxAggregate | null;
}
