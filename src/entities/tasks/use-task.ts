import { useQuery } from "react-query";
import { Task } from "entities/tasks/types";
import { useCallback } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export const useTask = (id: string) => {
    const getTask = useCallback(async (id: string): Promise<Task> => {
        const response = await fetch(`${API_URL}/tasks/${id}`);
        return response.json();
    }, []);
    const { data, isFetching } = useQuery(["tasks", id], () => getTask(id));

    return { task: data, isFetching };
};
