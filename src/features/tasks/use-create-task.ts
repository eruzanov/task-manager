import { useMutation } from "react-query";
import { NewTask } from "./types";

const API_URL = import.meta.env.VITE_API_URL;

export const useCreateTask = () => {
    const { mutate, isLoading, isSuccess } = useMutation((payload: NewTask) =>
        fetch(`${API_URL}/tasks`, {
            method: "post",
            body: JSON.stringify({...payload, createdAt: Date.now()}),
        })
    );

    return { create: mutate, isLoading, isSuccess };
};
