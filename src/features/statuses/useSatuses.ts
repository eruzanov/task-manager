import { useContext } from "react";
import { StatusesContext } from "./StatusesProvider";

export const useStatuses = () => {
    const statuses = useContext(StatusesContext);

    return { statuses };
};
