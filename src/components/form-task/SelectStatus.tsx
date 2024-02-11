import { Form, Select } from "antd";
import { Task } from "features/tasks/types";
import { useStatuses } from "features/statuses/useSatuses";
import { StatusTag } from "components/status-tag";

export const SelectStatus = () => {
    const { statuses } = useStatuses();
    const selectOptions = statuses.map(({ id }) => ({
        value: id,
        label: <StatusTag statusId={id} />,
    }));

    return (
        <Form.Item<Task> label="Status" name="statusId">
            <Select options={selectOptions} />
        </Form.Item>
    );
};
