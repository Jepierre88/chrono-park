'use client'
import UseServices from "@/app/hooks/UseServices";
import { createContext, PropsWithChildren, useContext } from "react";

export const CommonContext = createContext<Record<string, unknown> | null>(null);

export const UseCommonContext = () => {
    const context = useContext(CommonContext);
    return context;
}

export const CommonProvider = (props: PropsWithChildren) => {

    const {services} = UseServices()

    return (
        <CommonContext.Provider value={{
            services
        }}>
            {props.children}
        </CommonContext.Provider>
    );
}