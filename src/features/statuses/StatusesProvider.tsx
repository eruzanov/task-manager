import { createContext, useEffect } from "react";
import { useFetcher } from "features/fetcher/useFetcher";
import { Status } from "./types";

export const StatusesContext = createContext<Status[]>([]);

type Props = {
    children: React.ReactNode;
};

export const SatusesProvider: React.FC<Props> = ({ children }) => {
    const { data, query } = useFetcher<Status[]>();

    useEffect(() => {
        query("statuses");
    }, [query]);

    return (
        <StatusesContext.Provider value={data ?? []}>
            {children}
        </StatusesContext.Provider>
    );
};
