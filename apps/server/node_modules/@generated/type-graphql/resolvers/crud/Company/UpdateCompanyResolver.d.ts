import { GraphQLResolveInfo } from "graphql";
import { UpdateCompanyArgs } from "./args/UpdateCompanyArgs";
import { Company } from "../../../models/Company";
export declare class UpdateCompanyResolver {
    updateCompany(ctx: any, info: GraphQLResolveInfo, args: UpdateCompanyArgs): Promise<Company | null>;
}
