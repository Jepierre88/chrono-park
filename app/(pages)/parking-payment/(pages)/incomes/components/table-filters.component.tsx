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

        <article className="flex gap-2">
            <div className="flex items-center gap-2 mt-4">
                <Input className="uppercase" placeholder="Buscar por placa" onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Input type="datetime-local" id="startDatetime" onChange={(e) => handleSearch(e, 'startDatetime')} />
            </div>
            <div className="flex items-center gap-2 mt-4">
                <Input type="datetime-local" id="endDatetime" onChange={(e) => handleSearch(e, 'endDatetime')} />
            </div>
        </article>

    );
}