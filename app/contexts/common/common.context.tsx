'use client'
import { createContext, PropsWithChildren, useContext } from "react";

export const CommonContext = createContext<Record<string, unknown> | null>(null);

export const UseCommonContext = () => {
    const context = useContext(CommonContext);
    return context;
}

export const CommonProvider = (props: PropsWithChildren) => {


    return (
        <CommonContext.Provider value={{
            
        }}>
            {props.children}
        </CommonContext.Provider>
    );
}