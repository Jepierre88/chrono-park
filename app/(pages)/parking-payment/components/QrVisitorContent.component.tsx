'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const QrVisitorContent = ({ services }: { services: { id: string; name: string }[] }) => {
    const [selectedService, setSelectedService] = useState<string | undefined>();

    return (
        <form>
            <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Seleccionar Servicio" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {services.map((service) => (
                            <SelectItem key={service.id.toString()} value={service.id.toString()}>
                                {service.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <input type="hidden" name="service" value={selectedService ?? ""} />

            <Button type="submit">Confirmar</Button>
        </form>
    )
}
