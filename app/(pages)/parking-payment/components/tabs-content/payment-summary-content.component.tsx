'use client'
import { DataRow } from "@/components/shared/data-row.component";
import { Separator } from "@/components/ui/separator";
import { useParkingPaymentContext } from "@/lib/contexts/parking-payment/parking-payment.context";
import { formatDate } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { useSession } from "next-auth/react";

export default function PaymentSummaryContent() {
    const { paymentData } = useParkingPaymentContext();
    const { data: session } = useSession()
    return (
        <article className="flex justify-center flex-col">
            <DataRow label="Punto de pago" value={paymentData?.deviceId.toString()} />
            <DataRow label="Cajero" value={session?.user?.name ?? "Desconocido"} />
            <Separator />
            <DataRow label="Placa" value={paymentData?.plate} />
            <DataRow label="Tipo de vehículo" value={paymentData?.vehicleKind} />
            <DataRow label="Fecha de entrada" value={formatDate((paymentData?.startDateTime ?? ""))} />
            <DataRow label="Fecha de salida" value={formatDate((paymentData?.datetime ?? ""))} />
            <Separator/>
            <DataRow label="Descuento" value={paymentData?.discountTotal ? `${paymentData.discountTotal}%` : "0%"} />
            <DataRow label="Valor parqueadero" value={`$${paymentData?.total.toLocaleString("es-CO")}`} />
            <DataRow label="Total sin IVA" value={`$${paymentData.grossTotal.toLocaleString("es-CO")}`} />
            <Separator />
            <DataRow label="Servicios adicionales" value={`$${paymentData.totalServices.toLocaleString("es-CO")}`} />
        </article>
    );
}