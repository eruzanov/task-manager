import { useEffect } from "react";
import { useFetcher } from "features/fetcher/useFetcher";
import { Task } from "./types";

export const useTasks = () => {
    const { data, isLoading, query } = useFetcher<Task[]>();

    useEffect(() => {
        query("tasks");
    }, [query]);

    return { tasks: data ?? [], isLoading };
};
