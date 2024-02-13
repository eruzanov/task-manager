import { Card } from "antd";

import { SelectStatus } from "entities/board/ui/select-status";

interface FilterProps {
    onChange: (values: string[]) => void;
}

export const Filter: React.FC<FilterProps> = ({ onChange }) => {
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
