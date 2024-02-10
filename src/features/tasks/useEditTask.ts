import { useQuery, useMutation } from "react-query";
import { Task } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

const getTask = async (id: string | undefined): Promise<Task> => {
    const response = await fetch(`${API_URL}/tasks/${id}`);

    return response.json();
};

export const useEditTask = (id: string | undefined) => {
    const { data, isLoading } = useQuery(["tasks", id], () => getTask(id));
    const { mutate } = useMutation((payload: Task) =>
        fetch(`${API_URL}/tasks/${id}`, {
            method: "put",
            body: JSON.stringify(payload),
        })
    );

    return { task: data, update: mutate, isLoading };
};
