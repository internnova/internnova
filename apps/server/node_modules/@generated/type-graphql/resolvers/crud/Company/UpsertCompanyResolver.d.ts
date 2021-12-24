import { GraphQLResolveInfo } from "graphql";
import { UpsertCompanyArgs } from "./args/UpsertCompanyArgs";
import { Company } from "../../../models/Company";
export declare class UpsertCompanyResolver {
    upsertCompany(ctx: any, info: GraphQLResolveInfo, args: UpsertCompanyArgs): Promise<Company>;
}
