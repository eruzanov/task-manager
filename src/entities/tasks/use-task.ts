import { useQuery } from "react-query";
import { Task } from "@/entities/tasks/types";
import { getItem } from "@/shared/api/firebase";

export const useTask = (id: string) => {
    const { data, isFetching } = useQuery(["tasks", id], () =>
        getItem<Task>("tasks", id)
    );

    return { task: data, isFetching };
};
