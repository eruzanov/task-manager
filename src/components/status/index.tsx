import { Tag } from "antd";
import { useStatuses } from "../../features/statuses/useSatuses";
import { useColor } from "./useColor";

export interface TagOfTaskProps {
    statusId?: string;
}

export const Status: React.FC<TagOfTaskProps> = ({ statusId }) => {
    const { statuses } = useStatuses();
    const color = useColor(statusId);
    const title = statuses.find(({ id }) => id === statusId)?.title ?? "empty";

    return <Tag color={color}>{title}</Tag>;
};
