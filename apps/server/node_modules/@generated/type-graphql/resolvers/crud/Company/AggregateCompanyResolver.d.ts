import { GraphQLResolveInfo } from "graphql";
import { AggregateCompanyArgs } from "./args/AggregateCompanyArgs";
import { AggregateCompany } from "../../outputs/AggregateCompany";
export declare class AggregateCompanyResolver {
    aggregateCompany(ctx: any, info: GraphQLResolveInfo, args: AggregateCompanyArgs): Promise<AggregateCompany>;
}
