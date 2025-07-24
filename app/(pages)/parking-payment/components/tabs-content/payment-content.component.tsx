'use client';

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PaymentType } from "@/lib/constants/payment-type";
import { useParkingPaymentContext } from "@/lib/contexts/parking-payment/parking-payment.context";
import { DollarSign } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function PaymentContent() {
    const { paymentData } = useParkingPaymentContext();
    const [electronicInvoice, setElectronicInvoice] = useState(false);

    return (
        <article className="flex gap-6 p-4">
            <div className="flex-1 text-4xl font-sans font-bold flex items-center gap-2">
                <Label className="text-4xl">TOTAL:</Label>
                <span>${paymentData.total.toLocaleString("es-CO")}</span>
            </div>
            <div className="flex flex-1 flex-col gap-4 justify-center">
                <div>
                    <Label className="font-sans">Dinero recibido</Label>
                    <Input
                        type="number"
                        icon={<DollarSign size={20} className="text-neutral-500" />}
                    />
                </div>
                <div>
                    <Label className="font-sans">Medio de pago</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Seleccione un medio de pago" />
                        </SelectTrigger>
                        <SelectContent>
                            {Object.entries(PaymentType).map(([key, value]) => (
                                <SelectItem key={key} value={value.value.toString()}>
                                    {value.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-4">
                <div className="flex gap-2 h-12 items-center">
                    <Checkbox
                        id="factura"
                        checked={electronicInvoice}
                        onCheckedChange={(checked) => setElectronicInvoice(!!checked)}
                    />
                    <Label htmlFor="factura" className="font-sans">
                        ¿Facturación electrónica?
                    </Label>
                    <div>
                    </div>
                </div>
                <div className="h-12">
                    <AnimatePresence>
                        {electronicInvoice && (
                            <motion.div
                                key="identificationNumber-input"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Label>Documento de identidad</Label>
                                <Input
                                    type="text"
                                    placeholder="Número de identificación"
                                    className=""
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </article>
    );
}
