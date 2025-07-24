import { Card, CardContent } from "@/components/ui/card";
import PaymentContent from "./tabs-content/payment-content.component";

export default function PaymentCard() {
    return (
        <Card className="flex-1">
            <CardContent>
                <PaymentContent/>
            </CardContent>
        </Card>
    );
}
