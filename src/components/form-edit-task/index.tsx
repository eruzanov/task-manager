import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormTask } from "components/form-task";
import { useEditTask } from "features/tasks/useEditTask";

export const FormEditTask = () => {
    const navigate = useNavigate();
    const { taskId } = useParams() as { taskId: string };
    const { task, update, isLoading, isSuccess } = useEditTask(taskId);

    useEffect(() => {
        if (isSuccess) navigate(-1);
    }, [isSuccess, navigate]);

    return (
        <>
            <h2>Edit task #{taskId}</h2>
            <FormTask onFinish={update} data={task} isLoading={isLoading} />
        </>
    );
};
