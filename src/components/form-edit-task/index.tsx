import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "antd";

import { FormTask } from "components/form-task";
import { useEditTask } from "features/tasks/useEditTask";
import { TaskTitle } from "./TaskTitle";

export const FormEditTask = () => {
    const navigate = useNavigate();
    const { taskId } = useParams() as { taskId: string };
    const { task, update, isLoading, isSuccess } = useEditTask(taskId);

    useEffect(() => {
        if (isSuccess) navigate(-1);
    }, [isSuccess, navigate]);

    return (
        <Card>
            <TaskTitle taskId={taskId} />
            {task && <FormTask onFinish={update} data={task} isLoading={isLoading} />}
        </Card>
    );
};
