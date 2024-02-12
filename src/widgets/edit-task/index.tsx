import { Form, Input, Button } from "antd";

import { useDateTime } from "shared/datetime/use-date-time";
import { Task } from "entities/tasks/types";
import { SelectStatus } from "entities/board/ui/select-status";
import { useEditTask } from "features/edit-task/use-edit-task";
import { DeadlineDatePicker } from "features/deadline-date-picker";

interface EditTaskProps {
    id: string;
}

export const EditTask: React.FC<EditTaskProps> = ({ id }) => {
    const datetime = useDateTime();
    const { task, update, isLoading, isFetchingTask } = useEditTask(id);
    const initialValues = {
        ...task,
        deadlineAt: task?.deadlineAt ? datetime(task.deadlineAt) : undefined,
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
                <Input />
            </Form.Item>

            <Form.Item<Task> label="Description" name="description">
                <Input.TextArea autoSize rows={4} />
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
