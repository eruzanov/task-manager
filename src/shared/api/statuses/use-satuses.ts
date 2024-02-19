import { useQuery } from "react-query";

import { getCollection } from "@/shared/api/firebase";
import { Status } from "./types";

export const useStatuses = () => {
    const { data } = useQuery(
        "statuses",
        () => getCollection<Status>("statuses"),
        {
            placeholderData: [],
            refetchOnMount: false,
        }
    );

    return { statuses: data ?? [] };
};
