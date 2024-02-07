import { Typography } from "antd";
import { useParams } from "react-router-dom";
import { FormTask } from "../form-task";
import { useEditTask } from "../../features/tasks/useEditTask";

export const FormEditTask = () => {
    const { taskId } = useParams();
    const { task, update, isLoading } = useEditTask(taskId);

    return (
        <>
            <h2>
                Edit task: <Typography.Text mark>{taskId}</Typography.Text>
            </h2>
            <FormTask
                onFinish={update}
                data={task}
                isLoading={isLoading}
            />
        </>
    );
};
