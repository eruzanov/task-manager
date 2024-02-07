import { useCallback, useEffect, useState } from "react";
import { Task } from "./types";
import { API_URL } from "./constants";

export const useEditTask = (id: string | undefined) => {
    const [isLoading, setLoading] = useState(false);
    const [task, setTask] = useState<Task>();

    const updateTask = useCallback(
        async (data: Task) => {
            setLoading(true);
            const response = await fetch(`${API_URL}/tasks/${id}`, {
                method: "put",
                body: JSON.stringify(data),
            });
            const task = await response.json();
            setTask(task);
            setLoading(false);
        },
        [id]
    );

    const getTask = useCallback(async () => {
        setLoading(true);
        const response = await fetch(`${API_URL}/tasks/${id}`);
        const task = await response.json();
        setTask(task);
        setLoading(false);
    }, [id]);

    useEffect(() => {
        getTask();
    }, [getTask]);

    return { task, update: updateTask, isLoading };
};
