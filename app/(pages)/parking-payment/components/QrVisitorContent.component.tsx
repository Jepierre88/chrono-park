'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { UseCommonContext } from "@/lib/shared/common.context";
import EServiceTypes from "@/lib/hooks/service-types.enum";

export const QrVisitorContent = () => {
    const [selectedService, setSelectedService] = useState<string | undefined>();
    const [payDay, setPayDay] = useState<boolean>(false);

    const {
        services
    } = UseCommonContext();
    
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <header>
                <h2>Datos del visitante</h2>
            </header>
            <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccionar Servicio" defaultValue={undefined} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {services[EServiceTypes.VISITANTE] && services[EServiceTypes.VISITANTE].map((service) => (
                            <SelectItem key={service.id} value={service.id.toString()} defaultChecked={false}>
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
