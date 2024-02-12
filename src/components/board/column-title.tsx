import { Divider } from "antd";

import { StatusTag } from "components/status-tag";

interface ColumnTitle {
    statusId: string;
}

export const ColumnTitle: React.FC<ColumnTitle> = ({ statusId }) => (
    <Divider orientation="left" orientationMargin="0">
        <StatusTag statusId={statusId} />
    </Divider>
);
