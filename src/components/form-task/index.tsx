import { Form, Input, Button } from "antd";
import { Task } from "../../features/tasks/types";
import { useEffect } from "react";

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
    useEffect(() => {
        if (data?.id) form.setFieldsValue(data);
    }, [data, form]);

    return (
        <Form layout="vertical" onFinish={onFinish} form={form}>
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
            <Form.Item>
                <Button type="primary" htmlType="submit" disabled={isLoading}>
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};
