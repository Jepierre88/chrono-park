'use client'
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import EServiceTypes from "./service-types.enum";
import { IServicesEntity } from "@/lib/parking/services.entity";
import { axiosWithoutToast } from "@/lib/shared/axios.config";

export default function UseServices() {
    const [services, setServices] = useState<Record<string, IServicesEntity[]>>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);

            const responses = await Promise.all([
                axiosWithoutToast.get<IServicesEntity[]>(`/services`, {headers: { 'type': EServiceTypes.VISITANTE }}),
                axiosWithoutToast.get<IServicesEntity[]>(`/services`, {headers: { 'type': EServiceTypes.MENSUALIDAD }})
            ]);
            const data: Record<EServiceTypes, IServicesEntity[]> = {
                [EServiceTypes.VISITANTE]: responses[0].data,
                [EServiceTypes.MENSUALIDAD]: responses[1].data
            };
            setServices(data);

        } catch (err) {
            const axiosError = err as AxiosError;
            setError(axiosError.message || "Error fetching services");
            console.error('Error fetching services:', err);
        } finally {
            setLoading(false);
        }
    };

    const refetchServices = () => {
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        services,
        loading,
        error,
        fetchData,
        refetchServices
    };
}