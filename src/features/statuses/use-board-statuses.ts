import { useMemo } from "react";

import { useStatuses } from "features/statuses/use-satuses";

export const useBoardStatuses = () => {
    const { statuses } = useStatuses();
    const boardStatuses = useMemo(
        () => statuses.filter(({ id }) => id !== "5f33"), // id of closed status
        [statuses]
    );

    return { boardStatuses };
};
