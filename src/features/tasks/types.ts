import { Status } from "../statuses/types";

export type Task = {
    id?: string;
    statusId?: Status["id"];
    title: string;
    description: string;
};
