'use client'
import { useEffect, useState } from "react";
import { IServicesEntity } from "@/app/entities/parking-payment/services.entity";
import { AxiosError } from "axios";
import axiosInstance from "../lib/axios.config";

export default function UseServices() {
    const [services, setServices] = useState<IServicesEntity[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async (endpoint: string) => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await axiosInstance.get<IServicesEntity[]>(`/${endpoint}`);
            
            setServices(response.data);
        } catch (err) {
            const axiosError = err as AxiosError;
            setError(axiosError.message || "Error fetching services");
            console.error('Error fetching services:', err);
        } finally {
            setLoading(false);
        }
    };

    const refetchServices = () => {
        fetchData("services");
    };

    useEffect(() => {
        fetchData("services");
    }, []);

    return {
        services,
        loading,
        error,
        fetchData,
        refetchServices
    };
}