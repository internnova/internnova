import { GraphQLResolveInfo } from "graphql";
import { DeleteCompanyArgs } from "./args/DeleteCompanyArgs";
import { Company } from "../../../models/Company";
export declare class DeleteCompanyResolver {
    deleteCompany(ctx: any, info: GraphQLResolveInfo, args: DeleteCompanyArgs): Promise<Company | null>;
}
