import { useMemo } from "react";
import { Tag } from "antd";

import { useStatuses } from "shared/api/statuses/use-satuses";
import { useBoard } from "entities/board/use-board";

export interface StatusTagProps {
    statusId: string | number;
}

export const StatusTag: React.FC<StatusTagProps> = ({ statusId }) => {
    const { statuses } = useStatuses();
    const { COLORS } = useBoard();
    const color = COLORS[statusId];
    const title = useMemo(
        () => statuses.find(({ id }) => id === statusId)?.title,
        [statusId, statuses]
    );

    return <Tag bordered={false} color={color}>{title}</Tag>;
};
