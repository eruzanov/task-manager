import { useMemo } from "react";
import { useTasks } from "features/tasks/use-tasks";

export const useTasksByStatus = (statusId: string) => {
    const { tasks } = useTasks();
    const tasksByStatus = useMemo(
        () => tasks.filter((task) => statusId === task.statusId),
        [statusId, tasks]
    );

    return tasksByStatus;
};
