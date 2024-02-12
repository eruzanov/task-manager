import { Tag } from "antd";
import { useStatuses } from "features/statuses/use-satuses";
import { useColor } from "./use-color";

export interface TagOfTaskProps {
    statusId?: string;
}

export const StatusTag: React.FC<TagOfTaskProps> = ({ statusId }) => {
    const { statuses } = useStatuses();
    const color = useColor(statusId);
    const title = statuses.find(({ id }) => id === statusId)?.title ?? "empty";

    return <Tag color={color}>{title}</Tag>;
};
