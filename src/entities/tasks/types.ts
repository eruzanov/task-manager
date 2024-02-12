import { Status } from "shared/api/statuses/types";

export type Task = {
    id: string;
    statusId: Status["id"];
    title: string;
    description: string;
    createdAt: number;
    updatedAt: number;
    deadlineAt?: number;
};

export type NewTask = Omit<Task, "id" | "updatedAt">;
