'use client'
import { createContext, PropsWithChildren, useContext } from "react";
import UseServices from "./UseServices";

export const CommonContext = createContext<any>(undefined);

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