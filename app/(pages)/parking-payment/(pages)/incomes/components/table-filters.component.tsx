'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function TableFilters() {

    const [searchValue, setSearchValue] = useState("");
    const [debouncedSearchValue] = useDebounce(searchValue, 300);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const searchValue = event.target.value;
        const url = new URL(window.location.href);
        url.searchParams.set(key, searchValue);
        window.history.pushState({}, '', url.toString());
    }

    useEffect(() => {
        handleSearch({ target: { value: debouncedSearchValue } } as React.ChangeEvent<HTMLInputElement>, 'plate');
    }, [debouncedSearchValue]);

    return (

        <article className="w-full">
            {/* Mobile Layout */}
            <div className="flex flex-col gap-4 md:hidden">
                <div className="space-y-2">
                    <Label htmlFor="plate-search" className="text-sm font-medium">
                        Buscar por placa
                    </Label>
                    <Input 
                        id="plate-search"
                        className="uppercase w-full" 
                        placeholder="Buscar por placa" 
                        onChange={(e) => setSearchValue(e.target.value)} 
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="startDatetime" className="text-sm font-medium">
                            Fecha inicio
                        </Label>
                        <Input 
                            type="datetime-local" 
                            className="w-full" 
                            id="startDatetime" 
                            onChange={(e) => handleSearch(e, 'startDatetime')} 
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="endDatetime" className="text-sm font-medium">
                            Fecha fin
                        </Label>
                        <Input 
                            type="datetime-local" 
                            className="w-full" 
                            id="endDatetime" 
                            onChange={(e) => handleSearch(e, 'endDatetime')} 
                        />
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex md:items-end md:gap-4 lg:gap-6">
                <div className="flex-1 max-w-xs space-y-2">
                    <Label htmlFor="plate-search-desktop" className="text-sm font-medium">
                        Buscar por placa
                    </Label>
                    <Input 
                        id="plate-search-desktop"
                        className="uppercase w-full" 
                        placeholder="Buscar por placa" 
                        onChange={(e) => setSearchValue(e.target.value)} 
                    />
                </div>
                <div className="flex-1 max-w-xs space-y-2">
                    <Label htmlFor="startDatetime-desktop" className="text-sm font-medium">
                        Fecha inicio
                    </Label>
                    <Input 
                        type="datetime-local" 
                        className="w-full" 
                        id="startDatetime-desktop" 
                        onChange={(e) => handleSearch(e, 'startDatetime')} 
                    />
                </div>
                <div className="flex-1 max-w-xs space-y-2">
                    <Label htmlFor="endDatetime-desktop" className="text-sm font-medium">
                        Fecha fin
                    </Label>
                    <Input 
                        type="datetime-local" 
                        className="w-full" 
                        id="endDatetime-desktop" 
                        onChange={(e) => handleSearch(e, 'endDatetime')} 
                    />
                </div>
            </div>
        </article>

    );
}