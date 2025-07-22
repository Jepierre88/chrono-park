export const getServices = async ():Promise<any[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const services = [
                { id: 1, name: "Servicio 1" },
                { id: 2, name: "Servicio 2" },
                { id: 3, name: "Servicio 3" },
            ];
            resolve(services);
        }, 1000);
    });
}