import { useEffect } from "react";

import { NewTask } from "features/tasks/types";
import { useCreateTask } from "features/tasks/use-create-task";
import { FormTask } from "components/form-task";

interface CreateTask {
    onSuccess: () => void;
}

export const CreateTask: React.FC<CreateTask> = ({ onSuccess }) => {
    const { create, isLoading, isSuccess } = useCreateTask();
    const onFinish = (values: NewTask) => create(values);

    useEffect(() => {
        if (isSuccess) onSuccess();
    }, [isSuccess, onSuccess]);

    return <FormTask onFinish={onFinish} isLoading={isLoading} />;
};
