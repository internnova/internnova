import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCompanyArgs } from "./args/DeleteManyCompanyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCompanyResolver {
    deleteManyCompany(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCompanyArgs): Promise<AffectedRowsOutput>;
}
