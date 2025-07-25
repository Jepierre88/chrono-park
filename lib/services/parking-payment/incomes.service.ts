import { getIncomesAction } from "@/lib/actions/parking-payment/incomes.action";
import IPaginationParams from "@/lib/types/interfaces/pagination-params.interface";

export async function getIncomesService(params: IPaginationParams) {
    return await getIncomesAction(params)
}