import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getIncomesService } from "@/lib/services/parking-payment/incomes.service";
import IUrlSearchParams from "@/lib/types/interfaces/url-search-params.interface";
import TableFilters from "./components/table-filters.component";
import IncomesCardContent from "./components/incomes-card-content.component";

export default async function IncomesPages({searchParams}: IUrlSearchParams) {

    const { limit, page } = await searchParams;


    const incomes = await getIncomesService({limit: Number(limit), page: Number(page)})

    return (
       <section>

        <Card>
            <CardHeader className="flex flex-col lg:flex-row items-center justify-center sm:justify-between">
               <CardTitle ><h1>Ingresos</h1></CardTitle>
                <CardAction>
                    <TableFilters/>
                </CardAction>
            </CardHeader>
            <CardContent>
                <IncomesCardContent incomes={incomes} />
            </CardContent>
        </Card>
       </section>
    )
}