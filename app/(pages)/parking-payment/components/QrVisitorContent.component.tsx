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
            <div>
                <Label>Tipo de visitante</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="w-[180px]">
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


            <div>
                <Label>Código QR</Label>
                <Input placeholder="xxxxx-xxx-xxx">
                </Input>
            </div>

            <div>
                <Label>Placa</Label>
                <Input placeholder="ABC-1234" />
            </div>

            <div>
                <Label>Código de descuento</Label>
                <Input placeholder="XXXX-XXXX-XXXX" />
            </div>

            <div>
                <Label>Fecha de entrada</Label>
                <span>{new Date().toLocaleDateString()}</span>
            </div>


            <input type="hidden" name="service" value={selectedService ?? ""} />

            <Button type="submit">Confirmar</Button>
        </form>
    )
}
