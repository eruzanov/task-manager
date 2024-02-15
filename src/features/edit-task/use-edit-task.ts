import { useCallback, useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { Task } from "@/entities/tasks/types";
import { useTask } from "@/entities/tasks/use-task";

const API_URL = import.meta.env.VITE_API_URL;

export const useEditTask = (id: string) => {
    const navigate = useNavigate();
    const { task, isFetching: isFetchingTask } = useTask(id);
    const updateTask = useCallback(
        (payload: Task) => {
            return fetch(`${API_URL}/tasks/${id}`, {
                method: "put",
                body: JSON.stringify({ ...payload, updatedAt: Date.now() }),
            });
        },
        [id]
    );
    const { mutate: update, isLoading, isSuccess } = useMutation(updateTask);

    useEffect(() => {
        if (isSuccess) navigate(-1);
    }, [isSuccess, navigate]);

    return { task, update, isLoading, isFetchingTask };
};
