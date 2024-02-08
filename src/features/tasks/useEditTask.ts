import { useCallback, useEffect } from "react";
import { Task } from "./types";
import { useFetcher } from "features/fetcher/useFetcher";

export const useEditTask = (id: string | undefined) => {
    const { data, isLoading, query, update } = useFetcher<Task>();

    const updateTask = useCallback(
        (data: Task) => update(`tasks/${id}`, data),
        [id, update]
    );

    useEffect(() => {
        query(`tasks/${id}`);
    }, [id, query]);

    return { task: data, update: updateTask, isLoading };
};
