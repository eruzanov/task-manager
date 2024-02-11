import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { theme } from "antd";

import { FormTask } from "components/form-task";
import { useEditTask } from "features/tasks/useEditTask";

export const FormEditTask = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();
    const { taskId } = useParams() as { taskId: string };
    const { task, update, isLoading, isSuccess } = useEditTask(taskId);

    useEffect(() => {
        if (isSuccess) navigate(-1);
    }, [isSuccess, navigate]);

    return (
        <div
            style={{
                background: colorBgContainer,
                padding: 24,
                borderRadius: borderRadiusLG,
            }}
        >
            <h2>Edit task #{taskId}</h2>
            <FormTask onFinish={update} data={task} isLoading={isLoading} />
        </div>
    );
};
