import { GraphQLResolveInfo } from "graphql";
import { CreateManyCompanyArgs } from "./args/CreateManyCompanyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCompanyResolver {
    createManyCompany(ctx: any, info: GraphQLResolveInfo, args: CreateManyCompanyArgs): Promise<AffectedRowsOutput>;
}
