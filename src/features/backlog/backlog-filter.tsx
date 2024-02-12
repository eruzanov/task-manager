import { Card } from "antd";

import { SelectStatus } from "entities/board/ui/select-status";

interface BacklogFilterProps {
    onChange: (values: string[]) => void;
}

export const BacklogFilter: React.FC<BacklogFilterProps> = ({ onChange }) => {
    return (
        <Card title="Filter">
            <SelectStatus
                mode="multiple"
                onChange={onChange}
                allowClear
                style={{ width: "100%" }}
            />
        </Card>
    );
};
