import PaymentSummaryCard from "./components/paymen-summary-card.component";
import PaymentCard from "./components/payment-card.component";
import ServiceTypeCard from "./components/service-type-card.component";

export const dynamic = 'force-dynamic';

export default async function ParkingPaymentPage() {

    return (
        <section className="w-full flex flex-col gap-6 p-4">
            <div className="flex gap-6">
                <ServiceTypeCard />
                <PaymentSummaryCard />
            </div>
            <PaymentCard />
        </section>
    )
}