'use client'
import { createContext, PropsWithChildren, useContext } from "react";


// Definir la interfaz del contexto

// Crear el contexto con el tipo definido
export const CommonContext = createContext<unknown | null>(null);

// Hook personalizado con validación de tipo
export const UseCommonContext = () => {
    const context = useContext(CommonContext);
    
    if (!context) {
        throw new Error('UseCommonContext debe ser usado dentro de CommonProvider');
    }
    
    return context;
}

export const CommonProvider = (props: PropsWithChildren) => {

    //LAs peticiones del lado del cliente que respectan a un estado global se haran aca mediante hooks

    return (
        <CommonContext.Provider value={{
 
        }}>
            {props.children}
        </CommonContext.Provider>
    );
}