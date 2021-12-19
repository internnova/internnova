import { GraphQLResolveInfo } from "graphql";
import { GroupByCompanyArgs } from "./args/GroupByCompanyArgs";
import { CompanyGroupBy } from "../../outputs/CompanyGroupBy";
export declare class GroupByCompanyResolver {
    groupByCompany(ctx: any, info: GraphQLResolveInfo, args: GroupByCompanyArgs): Promise<CompanyGroupBy[]>;
}
