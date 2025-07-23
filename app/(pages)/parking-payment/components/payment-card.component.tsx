import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function PaymentCard() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <h2 className="text-lg font-semibold">Resumen del Pago</h2>
            </CardHeader>
            <CardContent>
                <h2 className="text-lg font-semibold mb-4">Resumen del Pago</h2>
                <p>Detalles del pago y resumen de la transacción.</p>
                {/* Aquí puedes agregar más detalles sobre el pago */}
            </CardContent>
        </Card>
    );
}
