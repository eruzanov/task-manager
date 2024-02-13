import { useMemo } from "react";
import type { Task } from "entities/tasks/types";
import { useTasks } from "entities/tasks/use-tasks";

const byUpdatedAt = (a: Task, b: Task) => b.updatedAt - a.updatedAt;

export const useTasksByStatus = (statusId: string) => {
    const { tasks } = useTasks();
    const tasksByStatus = useMemo(
        () =>
            tasks
                .filter((task) => statusId === task.statusId)
                .sort(byUpdatedAt),
        [statusId, tasks]
    );

    return tasksByStatus;
};
