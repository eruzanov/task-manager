import { Task } from "./types";
import { API_URL } from "./constants";
import { useEffect, useState } from "react";

export const useTasks = () => {
    const [isLoading, setLoading] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);

    const getTasks = async () => {
        setLoading(true);
        const response = await fetch(`${API_URL}/tasks`);
        const tasks = await response.json();
        setTasks(tasks);
        setLoading(false);
    };

    useEffect(() => {
        getTasks();
    }, []);

    return { tasks, isLoading };
};
