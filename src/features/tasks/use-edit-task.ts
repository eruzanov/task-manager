import { useCallback } from "react";
import { useMutation } from "react-query";

import { useTask } from "./use-task";
import { Task } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

export const useEditTask = (id: string) => {
    const { task } = useTask(id);
    const updateTask = useCallback(
        (payload: Task) => {
            return fetch(`${API_URL}/tasks/${id}`, {
                method: "put",
                body: JSON.stringify({ ...payload, updatedAt: Date.now() }),
            });
        },
        [id]
    );
    const { mutate, isLoading, isSuccess } = useMutation(updateTask);

    return { task, update: mutate, isLoading, isSuccess };
};
