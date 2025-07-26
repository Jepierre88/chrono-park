import { Card, CardContent } from "@/components/ui/card";
import PaymentSummaryContent from "./tabs-content/payment-summary-content.component";

export default function PaymentSummaryCard() {
    return (
        <Card className="flex-1">
            <CardContent>
                <PaymentSummaryContent/>
            </CardContent>
        </Card>
    );
}