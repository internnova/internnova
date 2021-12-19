import { CompanyCreateInput } from "../../../inputs/CompanyCreateInput";
import { CompanyUpdateInput } from "../../../inputs/CompanyUpdateInput";
import { CompanyWhereUniqueInput } from "../../../inputs/CompanyWhereUniqueInput";
export declare class UpsertCompanyArgs {
    where: CompanyWhereUniqueInput;
    create: CompanyCreateInput;
    update: CompanyUpdateInput;
}
