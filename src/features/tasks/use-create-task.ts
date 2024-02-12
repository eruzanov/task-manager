import { useMutation } from "react-query";
import { NewTask } from "./types";
import { useCallback } from "react";
import { useBoard } from "features/board/use-board";

const API_URL = import.meta.env.VITE_API_URL;

export const useCreateTask = () => {
    const { DEFAULT_STATUS_ID } = useBoard();
    const { mutate, isLoading, isSuccess } = useMutation((payload: NewTask) =>
        fetch(`${API_URL}/tasks`, {
            method: "post",
            body: JSON.stringify({ ...payload, createdAt: Date.now() }),
        })
    );
    const create = useCallback(
        (values: NewTask) => {
            mutate({ ...values, statusId: DEFAULT_STATUS_ID });
        },
        [DEFAULT_STATUS_ID, mutate]
    );

    return { create, isLoading, isSuccess };
};
