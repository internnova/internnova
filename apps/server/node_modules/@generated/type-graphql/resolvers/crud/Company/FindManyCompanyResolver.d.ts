import { GraphQLResolveInfo } from "graphql";
import { FindManyCompanyArgs } from "./args/FindManyCompanyArgs";
import { Company } from "../../../models/Company";
export declare class FindManyCompanyResolver {
    companies(ctx: any, info: GraphQLResolveInfo, args: FindManyCompanyArgs): Promise<Company[]>;
}
