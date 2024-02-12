import { Form, Input, Button, DatePicker } from "antd";

import { Task } from "features/tasks/types";
import { SelectStatus } from "./select-status";
import { useDateTime } from "features/datetime/use-date-time";

interface FormTaskProps {
    onFinish: (data: Task) => void;
    isLoading?: boolean;
    data?: Task;
}

export const FormTask: React.FC<FormTaskProps> = ({
    onFinish,
    isLoading,
    data,
}) => {
    const datetime = useDateTime();
    const existingTask = Boolean(data?.id);
    const initialValues = {
        ...data,
        deadlineAt: data?.deadlineAt ? datetime(data.deadlineAt) : undefined,
    };
    const handleFinish = (values: Task) =>
        onFinish({ ...values, deadlineAt: values.deadlineAt?.valueOf() });

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
                <Input.TextArea autoSize={existingTask} rows={4} />
            </Form.Item>
            <Form.Item label="Deadline" name="deadlineAt">
                <DatePicker disabledDate={(current) => current && current < datetime().startOf('day')} />
            </Form.Item>
            {existingTask && <SelectStatus />}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};
