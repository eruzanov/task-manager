import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NewTask, Task } from "features/tasks/types";
import { useFetcher } from "features/fetcher/useFetcher";
import { FormTask } from "components/form-task";

export const FormCreateTask = () => {
    const navigate = useNavigate();
    const { data, isLoading, create } = useFetcher<Task>();
    const onFinish = (data: NewTask) => create("tasks", data);

    useEffect(() => {
        if (data?.id) {
            navigate("/");
        }
    }, [navigate, data]);

    return (
        <>
            <h2>Create task</h2>
            <FormTask onFinish={onFinish} isLoading={isLoading} />
        </>
    );
};
