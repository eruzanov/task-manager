import { useMemo, useState } from "react";

import type { Task } from "features/tasks/types";

export const useFilteredTasks = (tasks: Task[]) => {
    const [filterValues, setFilterValues] = useState<string[]>([]);
    const onChangeFilter = (values: string[]) => setFilterValues(values);
    const filteredTasks = useMemo(
        () =>
            filterValues.length
                ? tasks.filter(
                      ({ statusId }) =>
                          statusId && filterValues.includes(statusId)
                  )
                : tasks,
        [filterValues, tasks]
    );

    return {
        onChangeFilter,
        filteredTasks,
    };
};
