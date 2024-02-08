import { useEffect } from "react";
import { Form, Input, Select, Button } from "antd";
import { Task } from "features/tasks/types";
import { useStatuses } from "features/statuses/useSatuses";
import { Status } from "components/status";

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
    const { statuses } = useStatuses();
    const [form] = Form.useForm();
    const selectOptions = statuses.map(({ id }) => ({
        value: id,
        label: <Status statusId={id} />,
    }));

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
            <Form.Item<Task> label="Status" name="statusId">
                <Select options={selectOptions} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" disabled={isLoading}>
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};
