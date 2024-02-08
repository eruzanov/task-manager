import { createContext, useEffect } from "react";
import { Status } from "./types";
import { useFetcher } from "../fetcher/useFetcher";

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
