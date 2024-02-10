import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { NewTask } from "features/tasks/types";
import { useCreateTask } from "features/tasks/useCreateTask";
import { FormTask } from "components/form-task";

export const FormCreateTask = () => {
    const navigate = useNavigate();
    const { create, isLoading, isSuccess } = useCreateTask();
    const onFinish = (data: NewTask) => create(data);

    useEffect(() => {
        if (isSuccess) navigate("/");
    }, [navigate, isSuccess]);

    return (
        <>
            <h2>Create task</h2>
            <FormTask onFinish={onFinish} isLoading={isLoading} />
        </>
    );
};
