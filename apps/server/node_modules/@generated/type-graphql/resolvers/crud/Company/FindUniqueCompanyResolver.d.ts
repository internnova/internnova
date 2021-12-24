import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCompanyArgs } from "./args/FindUniqueCompanyArgs";
import { Company } from "../../../models/Company";
export declare class FindUniqueCompanyResolver {
    company(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCompanyArgs): Promise<Company | null>;
}
