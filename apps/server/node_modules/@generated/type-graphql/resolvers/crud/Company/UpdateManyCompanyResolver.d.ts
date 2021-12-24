import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCompanyArgs } from "./args/UpdateManyCompanyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCompanyResolver {
    updateManyCompany(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCompanyArgs): Promise<AffectedRowsOutput>;
}
