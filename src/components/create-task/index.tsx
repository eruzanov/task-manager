import { useEffect } from "react";

import { useCreateTask } from "features/tasks/use-create-task";
import { FormTask } from "components/form-task";

interface CreateTask {
    onSuccess: () => void;
}

export const CreateTask: React.FC<CreateTask> = ({ onSuccess }) => {
    const { create, isLoading, isSuccess } = useCreateTask();

    useEffect(() => {
        if (isSuccess) onSuccess();
    }, [isSuccess, onSuccess]);

    return <FormTask onFinish={create} isLoading={isLoading} />;
};
