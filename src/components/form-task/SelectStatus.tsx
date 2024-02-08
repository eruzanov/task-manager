import { Form, Select } from "antd";
import { Task } from "features/tasks/types";
import { useStatuses } from "features/statuses/useSatuses";
import { Status } from "components/status";

export const SelectStatus = () => {
    const { statuses } = useStatuses();
    const selectOptions = statuses.map(({ id }) => ({
        value: id,
        label: <Status statusId={id} />,
    }));

    return (
        <Form.Item<Task> label="Status" name="statusId">
            <Select options={selectOptions} />
        </Form.Item>
    );
};
