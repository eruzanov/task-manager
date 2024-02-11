import { useQuery } from "react-query";
import { Task } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

const getTasks = async (): Promise<Task[]> => {
    const response = await fetch(`${API_URL}/tasks?_sort=updatedAt`);

    return response.json();
};

export const useTasks = () => {
    const { data, isLoading } = useQuery("tasks", getTasks, {
        placeholderData: [],
    });

    return { tasks: data ?? [], isLoading };
};
