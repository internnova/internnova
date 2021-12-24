import { GraphQLResolveInfo } from "graphql";
import { FindFirstCompanyArgs } from "./args/FindFirstCompanyArgs";
import { Company } from "../../../models/Company";
export declare class FindFirstCompanyResolver {
    findFirstCompany(ctx: any, info: GraphQLResolveInfo, args: FindFirstCompanyArgs): Promise<Company | null>;
}
