import { useState } from "react";
import { NewTask, Task } from "./types";
import { API_URL } from "./constants";

export const useCreateTask = () => {
    const [task, setTask] = useState<Task>();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>();
    const createTask = async (data: NewTask) => {
        setLoading(true);
        setError(false);
        try {
            const response = await fetch(`${API_URL}/tasks`, {
                method: "post",
                body: JSON.stringify(data),
            });
            const task = await response.json();
            setTask(task);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };

    return { createTask, isLoading, task, error };
};
