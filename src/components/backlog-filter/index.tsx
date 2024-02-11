import { useMemo } from "react";
import { Card, Select } from "antd";

import { useStatuses } from "features/statuses/useSatuses";
import { StatusTag } from "components/status-tag";

interface BacklogFilterProps {
    onChange: (values: string[]) => void;
}

export const BacklogFilter: React.FC<BacklogFilterProps> = ({ onChange }) => {
    const { statuses } = useStatuses();
    const selectOptions = useMemo(
        () =>
            statuses.map(({ id }) => ({
                value: id,
                label: <StatusTag statusId={id} />,
            })),
        [statuses]
    );

    return (
        <Card title="Filter">
            <Select
                mode="multiple"
                options={selectOptions}
                onChange={onChange}
                allowClear
                style={{ width: "100%" }}
            />
        </Card>
    );
};
