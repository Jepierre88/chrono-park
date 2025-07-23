'use server'

import EServiceTypes from "@/lib/types/enums/service-types.enum";
import { IServicesEntity } from "@/lib/types/entities/parking-payment/services.entity";
import axiosServerInstance from "@/lib/shared/axios-server.config"

export async function getServices() {
    const responses = await Promise.all([
        axiosServerInstance.get<IServicesEntity[]>(`/services`, { headers: { 'type': EServiceTypes.VISITANTE } }),
        axiosServerInstance.get<IServicesEntity[]>(`/services`, { headers: { 'type': EServiceTypes.MENSUALIDAD } })
    ]);
    const data: Record<EServiceTypes, IServicesEntity[]> = {
        [EServiceTypes.VISITANTE]: responses[0].data,
        [EServiceTypes.MENSUALIDAD]: responses[1].data
    };
    return data;
}