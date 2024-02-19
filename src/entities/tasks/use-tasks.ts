import { useQuery } from "react-query";

import { Task } from "@/entities/tasks/types";
import { getCollection } from "@/shared/api/firebase";

export const useTasks = () => {
    const { data, isLoading } = useQuery(
        "tasks",
        () => getCollection<Task>("tasks"),
        { placeholderData: [] }
    );

    return { tasks: data ?? [], isLoading };
};
