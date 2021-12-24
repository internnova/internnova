import { GraphQLResolveInfo } from "graphql";
import { CreateCompanyArgs } from "./args/CreateCompanyArgs";
import { Company } from "../../../models/Company";
export declare class CreateCompanyResolver {
    createCompany(ctx: any, info: GraphQLResolveInfo, args: CreateCompanyArgs): Promise<Company>;
}
