import { Card, CardAction, CardContent, CardHeader } from "@/components/ui/card";
import { getIncomesService } from "@/lib/services/parking-payment/incomes.service";
import IUrlSearchParams from "@/lib/types/interfaces/url-search-params.interface";
import TableFilters from "./components/table-filters.component";
import IncomesCardContent from "./components/incomes-card-content.component";

export default async function IncomesPages({searchParams}: IUrlSearchParams) {

    const { limit, page } = await searchParams;


    const incomes = await getIncomesService({limit: Number(limit), page: Number(page)})

    return (
      <section className="w-full max-w-full overflow-hidden">
        <header className="space-y-2 my-6">
            <h1 className="text-2xl font-bold">Ingresos</h1>
            <p className="text-muted-foreground">Aquí puedes ver y gestionar los ingresos registrados.</p>
        </header>

        <Card className="w-full">
            <CardHeader className="flex flex-col lg:flex-row items-center justify-center sm:justify-between">
                <CardAction className="w-full sm:w-auto">
                    <TableFilters/>
                </CardAction>
            </CardHeader>
            <CardContent className="p-0 sm:p-6">
                <div className="w-full overflow-x-auto">
                    <IncomesCardContent incomes={incomes} />
                </div>
            </CardContent>
        </Card>
       </section>
    )
}