import { Form, Input, Button } from "antd";
import dayjs from "dayjs";

import { DeadlineDatePicker } from "@/features/deadline-date-picker";
import { useEditTask } from "@/features/edit-task/use-edit-task";
import { SelectStatus } from "@/features/select-status";
import { Task } from "@/entities/tasks/types";

interface EditTaskProps {
    id: string;
}

export const EditTask: React.FC<EditTaskProps> = ({ id }) => {
    const { task, update, isLoading, isFetchingTask } = useEditTask(id);
    const initialValues = {
        ...task,
        deadlineAt: task?.deadlineAt ? dayjs(task.deadlineAt) : undefined,
    };
    const handleFinish = (values: Task) =>
        update({ ...values, deadlineAt: values.deadlineAt?.valueOf() });

    if (isFetchingTask) return;

    return (
        <Form
            layout="vertical"
            onFinish={handleFinish}
            initialValues={initialValues}
            disabled={isLoading}
        >
            <Form.Item<Task>
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input Title" }]}
            >
                <Input size="large" />
            </Form.Item>

            <Form.Item<Task> label="Description" name="description">
                <Input.TextArea autoSize rows={4} size="large" />
            </Form.Item>

            <Form.Item label="Deadline" name="deadlineAt">
                <DeadlineDatePicker />
            </Form.Item>

            <Form.Item<Task> label="Status" name="statusId">
                <SelectStatus />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};
