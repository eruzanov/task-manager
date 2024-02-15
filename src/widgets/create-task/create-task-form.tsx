import { Form, Input, Button } from "antd";
import { useEffect } from "react";

import { useCreateTask } from "@/features/create-task/use-create-task";
import { DeadlineDatePicker } from "@/features/deadline-date-picker";
import { Task } from "@/entities/tasks/types";

interface CreateTaskFormProps {
    onSuccess: () => void;
}

export const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ onSuccess }) => {
    const { create, isLoading, isSuccess } = useCreateTask();

    useEffect(() => {
        if (isSuccess) onSuccess();
    }, [isSuccess, onSuccess]);

    return (
        <Form layout="vertical" onFinish={create} disabled={isLoading}>
            <Form.Item<Task>
                label="Title"
                name="title"
                rules={[{ required: true, message: "Please input Title" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<Task> label="Description" name="description">
                <Input.TextArea rows={4} />
            </Form.Item>
            
            <Form.Item label="Deadline" name="deadlineAt">
                <DeadlineDatePicker />
            </Form.Item>
            
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};
