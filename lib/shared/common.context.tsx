'use client'
import { createContext, PropsWithChildren, useContext } from "react";
import UseServices from "../hooks/UseServices";
import { IServicesEntity } from "../parking/services.entity";

// Definir la interfaz del contexto
interface CommonContextType {
    services: Record<string, IServicesEntity[]>;
    loading: boolean;
    error: string | null;
    refetchServices: () => void;
}

// Crear el contexto con el tipo definido
export const CommonContext = createContext<CommonContextType | null>(null);

// Hook personalizado con validación de tipo
export const UseCommonContext = () => {
    const context = useContext(CommonContext);
    
    if (!context) {
        throw new Error('UseCommonContext debe ser usado dentro de CommonProvider');
    }
    
    return context;
}

export const CommonProvider = (props: PropsWithChildren) => {
    const { services, loading, error, refetchServices } = UseServices();

    return (
        <CommonContext.Provider value={{
            services,
            loading,
            error,
            refetchServices
        }}>
            {props.children}
        </CommonContext.Provider>
    );
}