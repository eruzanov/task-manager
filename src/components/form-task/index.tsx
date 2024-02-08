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
    const hasId = Boolean(data?.id);
    const size = "large"

    useEffect(() => {
        if (hasId) form.setFieldsValue(data);
    }, [data, form, hasId]);

    return (
        <Form layout="vertical" onFinish={onFinish} form={form} size={size}>
            <Form.Item<Task>
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input Title" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item<Task> label="Description" name="description">
                <Input.TextArea />
            </Form.Item>
            {hasId && <SelectStatus />}
            <Form.Item>
                <Button type="primary" htmlType="submit" size={size} disabled={isLoading}>
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};
