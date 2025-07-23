import PaymentSummaryCard from "./components/PaymentSummaryCard.component";
import PaymentCard from "./components/PaymentCard.component";
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