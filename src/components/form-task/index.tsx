import { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { Task } from "features/tasks/types";
import { SelectStatus } from "./SelectStatus";

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
    const [form] = Form.useForm();
    const existingTask = Boolean(data?.id);
    const size = "large";

    useEffect(() => {
        if (existingTask) form.setFieldsValue(data);
    }, [data, form, existingTask]);

    return (
        <Form
            layout="vertical"
            onFinish={onFinish}
            form={form}
            size={size}
            style={{ minHeight: 280 }}
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
            {existingTask && <SelectStatus />}
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    size={size}
                    disabled={isLoading}
                >
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};
