import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useCreateTask } from "../../features/tasks/useCreateTask";
import { useEffect } from "react";

type Task = {
    title: string;
    description: string;
};

export const FormTask = () => {
    const navigate = useNavigate();
    const { createTask, isLoading, task } = useCreateTask();
    const onFinish = (data: Task) => createTask(data);

    useEffect(() => {
        if (task?.id) {
            navigate("/");
        }
    }, [navigate, task]);

    return (
        <Form layout="vertical" onFinish={onFinish}>
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
                    Create
                </Button>
            </Form.Item>
        </Form>
    );
};
