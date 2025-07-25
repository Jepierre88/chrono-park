import { PageGuard } from "@/components/auth/page-guard";
import EPermissions from "@/lib/shared/enums/permissions.enum";

export default function TransactionsPage(){
    return (
        <PageGuard requiredPermissions={[EPermissions.VIEW_TRANSACTIONS]}>
        <h1>Transactions Page</h1>

        {/* Add your transactions page content here */}
        </PageGuard>
    );
}