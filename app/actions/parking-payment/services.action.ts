import { IServicesEntity } from "@/app/entities/parking-payment/services.entity";

export const getParkingServices = (): Promise<IServicesEntity[]> => {
    return new Promise((resolve) => {
        // Mock data - replace with actual API call
        const mockServices: IServicesEntity[] = [
            { id: "1", name: "Servicio 1" },
            { id: "2", name: "Servicio 2" },
            { id: "3", name: "Servicio 3" }
        ];
        resolve(mockServices);
    });
};