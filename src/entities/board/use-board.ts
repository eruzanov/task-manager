import { useMemo } from "react";

import { useStatuses } from "@/shared/api/statuses/use-satuses";
import {
    DEFAULT_STATUS_ID,
    COLORS,
    CLOSED,
    DONE,
    TODO,
    IN_PROGRESS,
    REVIEW,
} from "./constants";

const isNotPassedTask = (task: { statusId: string }) => {
    return ![CLOSED, DONE].includes(task.statusId);
};

export const useBoard = () => {
    const { statuses } = useStatuses();
    const boardStatuses = useMemo(
        () =>
            statuses.filter(({ id }) =>
                [TODO, IN_PROGRESS, REVIEW, DONE].includes(id)
            ),
        [statuses]
    );

    return { DEFAULT_STATUS_ID, COLORS, isNotPassedTask, boardStatuses };
};
