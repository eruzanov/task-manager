import { Status } from "features/statuses/types";

export type Task = {
    id: string;
    statusId: Status["id"];
    title: string;
    description: string;
    createdAt: number;
    updatedAt: number;
    deadlineAt?: number;
};

export type NewTask = Omit<Task, "id" | "statusId" | "updatedAt">;
