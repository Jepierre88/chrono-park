'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { IServicesEntity } from "@/lib/parking/services.entity";
import { Input } from "@/components/ui/input";

export const QrVisitorContent = ({ services }: { services: IServicesEntity[] }) => {
    const [selectedService, setSelectedService] = useState<string>("");
    const [payDay, setPayDay] = useState<boolean>(false);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <div className="grid grid-cols-2 gap-4">
                <Label className="w-full justify-end flex font-semibold">Tipo de visitante</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar Servicio" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {services && services.map((service) => (
                                <SelectItem key={service.id} value={service.id.toString()} defaultChecked={false}>
                                    {service.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <Label className="w-full justify-end flex font-semibold text-nowrap">Código QR</Label>
                <div className=" w-full">
                    <Input className="w-full" placeholder="xxxxx-xxx-xxx" />
                </div>
            </div>


            <div className="grid grid-cols-2 gap-4 mt-4">
                <Label className="w-full justify-end flex font-semibold text-nowrap">Placa</Label>
                <Input className="w-full" placeholder="ABC-1234" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 items-center">
                <Label className="w-full justify-end flex font-semibold text-nowrap">Pagar día completo</Label>
                <Checkbox
                    name="payDay"
                    checked={payDay}
                    onCheckedChange={(e: boolean) => {
                        setPayDay(e);
                    }}
                />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <Label className="w-full justify-end flex font-semibold text-nowrap">Código de descuento</Label>
                <Input className="w-full" placeholder="XXXX-XXXX-XXXX" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                <Label className="w-full justify-end flex font-semibold text-nowrap">Fecha de entrada</Label>
                <span>{new Date().toLocaleString("es-CO")}</span>
            </div>


            <input type="hidden" name="service" value={selectedService ?? ""} />

            <Button type="submit">Confirmar</Button>
        </form>
    )
}
