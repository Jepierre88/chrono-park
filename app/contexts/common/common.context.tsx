'use client'
import { createContext, PropsWithChildren, useContext } from "react";

const commonContext = createContext<any>({})

export const UseCommonContext = () => {
    const context = useContext(commonContext);
    return context;
}

export const CommonProvider = (props: PropsWithChildren) => {


    return (
        <commonContext.Provider value={{
            
        }}>
            {props.children}
        </commonContext.Provider>
    );
}