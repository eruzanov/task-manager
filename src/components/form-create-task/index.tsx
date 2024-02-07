import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateTask } from "../../features/tasks/useCreateTask";
import { FormTask } from "../form-task";

type Task = {
    title: string;
    description: string;
};

export const FormCreateTask = () => {
    const navigate = useNavigate();
    const { createTask, isLoading, task } = useCreateTask();
    const onFinish = (data: Task) => createTask(data);

    useEffect(() => {
        if (task?.id) {
            navigate("/");
        }
    }, [navigate, task]);

    return (
        <>
            <h2>Create task</h2>
            <FormTask onFinish={onFinish} isLoading={isLoading} />
        </>
    );
};
