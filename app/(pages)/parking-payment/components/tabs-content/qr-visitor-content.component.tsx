'use client'

import { useForm, Controller } from "react-hook-form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useParkingPaymentContext } from "@/lib/contexts/parking-payment/parking-payment.context";
import { useEffect } from "react";
import { IServicesEntity } from "@/lib/types/entities/parking-payment/services.entity";
import { useDebounce } from "use-debounce";

interface FormValues {
    selectedService: string;
    identificationCode: string;
    payDay: boolean;
    plate: string;
    discountCode: string;
}

export const QrVisitorContent = ({ services }: { services: IServicesEntity[] }) => {
    // Access the parking payment context
    const { paymentData, setPaymentData, validatePayment } = useParkingPaymentContext();

    // Initialize the form with default values
    const { control, handleSubmit, watch, setValue } = useForm<FormValues>({
        defaultValues: {
            selectedService: paymentData.selectedService ? paymentData.selectedService.toString() : "",
            identificationCode: paymentData.identificationCode ?? "",
            payDay: false,
            plate: "",
            discountCode: "",
        },
    });

    // Watch the form fields
    const selectedService = watch("selectedService");
    const identificationCode = watch("identificationCode");
    const payDay = watch("payDay");

    //DEBOUNCES
    const [debouncedIdentificationCode] = useDebounce(identificationCode, 500);


    //EFFECTS
    useEffect(() => {
        if (!validateParamsToValidate()) {
            validatePayment({
                identificationCode,
                identificationType: paymentData.identificationType,
                payDay,
                plate: paymentData.plate,
                deviceId: paymentData.deviceId,
            });
        }
    }, [debouncedIdentificationCode, selectedService, payDay, paymentData.plate, paymentData.deviceId, validatePayment]);


    const validateParamsToValidate = ()=>{
        return !selectedService || !identificationCode;
    }


    return (
        <form onSubmit={handleSubmit((data) => {
            setPaymentData({
                ...paymentData,
                selectedService: data.selectedService,
                identificationCode: data.identificationCode,
            });
        })}>
            <div className="grid grid-cols-2 gap-4">
                <Label className="w-full justify-end flex font-semibold">Tipo de visitante</Label>
                <Controller
                    name="selectedService"
                    control={control}
                    render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Seleccionar Servicio" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {services.map(service => (
                                        <SelectItem key={service.id} value={service.id.toString()}>
                                            {service.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    )}
                />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <Label className="w-full justify-end flex font-semibold text-nowrap">Código QR</Label>
                <Controller
                    name="identificationCode"
                    control={control}
                    render={({ field }) => <Input className="w-full" {...field} />}
                />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <Label className="w-full justify-end flex font-semibold text-nowrap">Placa</Label>
                <Controller
                    name="plate"
                    control={control}
                    render={({ field }) => <Input className="w-full" placeholder="ABC-1234" {...field} />}
                />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 items-center">
                <Label className="w-full justify-end flex font-semibold text-nowrap">Pagar día completo</Label>
                <Controller
                    name="payDay"
                    control={control}
                    render={({ field }) => (
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={(e: boolean) => field.onChange(e)}
                        />
                    )}
                />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <Label className="w-full justify-end flex font-semibold text-nowrap">Código de descuento</Label>
                <Controller
                    name="discountCode"
                    control={control}
                    render={({ field }) => <Input className="w-full" placeholder="XXXX-XXXX-XXXX" {...field} />}
                />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <Label className="w-full justify-end flex font-semibold text-nowrap">Fecha de entrada</Label>
                {/* <span>{new Date().toLocaleString("es-CO")}</span> */}
            </div>

            <input type="hidden" name="service" value={selectedService} />
        </form>
    );
};
