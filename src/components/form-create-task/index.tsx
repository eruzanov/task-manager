import { useEffect } from "react";

import { NewTask } from "features/tasks/types";
import { useCreateTask } from "features/tasks/useCreateTask";
import { FormTask } from "components/form-task";

interface FormCreateTask {
    onSuccess: () => void;
}

export const FormCreateTask: React.FC<FormCreateTask> = ({ onSuccess }) => {
    const { create, isLoading, isSuccess } = useCreateTask();
    const onFinish = (values: NewTask) => create(values);

    useEffect(() => {
        if (isSuccess) onSuccess();
    }, [isSuccess, onSuccess]);

    return <FormTask onFinish={onFinish} isLoading={isLoading} />;
};
