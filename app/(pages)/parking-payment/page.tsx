import PaymentSummaryCard from "./components/paymen-summary-card.component";
import PaymentCard from "./components/payment-card.component";
import ServiceTypeCard from "./components/service-type-card.component";

export const dynamic = 'force-dynamic';

export default async function ParkingPaymentPage() {
    
    return (
        <section className="flex flex-col lg:flex-row gap-6 p-4">
            <ServiceTypeCard />
            <PaymentSummaryCard/>
            <PaymentCard/>
        </section>
    )
}