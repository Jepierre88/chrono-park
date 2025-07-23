'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { IServicesEntity } from "@/lib/parking/services.entity";
import { UseCommonContext } from "@/lib/shared/common.context";

export const QrVisitorContent = () => {
    const [selectedService, setSelectedService] = useState<string | undefined>();
    const [payDay, setPayDay] = useState<boolean>(false);

    const { services }: { services: IServicesEntity[] } = UseCommonContext();

    const validServices = services.filter(service => service.id && service.name);
    
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <header>
                <h2>Datos del visitante</h2>
            </header>
            <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccionar Servicio" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {validServices.map((service) => (
                            <SelectItem key={service.id} value={service.id!}>
                                {service.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <div className="flex items-center mt-4">
                <Checkbox
                    className="ml-0"
                    name="payDay"
                    checked={payDay}
                    onCheckedChange={(e: boolean) => {
                        setPayDay(e);
                    }}
                />
                <Label className="ml-2" htmlFor="payDay">
                    Dia pago
                </Label>
            </div>

            <input type="hidden" name="service" value={selectedService ?? ""} />

            <Button type="submit">Confirmar</Button>
        </form>
    )
}
