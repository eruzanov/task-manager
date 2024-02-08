import { Status } from "features/statuses/types";

export type Task = {
    id?: string;
    statusId?: Status["id"];
    title: string;
    description: string;
};
