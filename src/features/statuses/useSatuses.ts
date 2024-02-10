import { useQuery } from "react-query";
import { Status } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

const getStatuses = async (): Promise<Status[]> => {
    const response = await fetch(`${API_URL}/statuses`);

    return response.json();
};

export const useStatuses = () => {
    const { data } = useQuery("statuses", getStatuses, {
        placeholderData: [],
        refetchOnMount: false,
    });

    return { statuses: data ?? [] };
};
