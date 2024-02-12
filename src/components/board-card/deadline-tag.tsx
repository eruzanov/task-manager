import { Tag } from "antd";
import {
    SmileOutlined,
    ClockCircleOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons";

import { useDateTime } from "features/datetime/use-date-time";
import { DEFAULT_DATE_FORMAT } from "features/datetime/constants";

interface DeadlineTagProps {
    date: number;
}

export const DeadlineTag: React.FC<DeadlineTagProps> = ({ date }) => {
    const datetime = useDateTime();
    const formated = datetime(date).format(DEFAULT_DATE_FORMAT);
    const isBeforeWeek = datetime().isBefore(datetime(date), "week");
    const lessThanWeek = datetime().isSame(datetime(date), "week");
    const isSameDay = datetime().isSame(datetime(date), "day");

    if (isBeforeWeek)
        return (
            <Tag bordered={false} color="orange" icon={<ClockCircleOutlined />}>
                {formated}
            </Tag>
        );

    if (lessThanWeek && !isSameDay)
        return (
            <Tag
                bordered={false}
                color="volcano"
                icon={<ExclamationCircleOutlined />}
            >
                {formated}
            </Tag>
        );

    if (lessThanWeek && isSameDay)
        return (
            <Tag
                bordered={false}
                color="red"
                icon={<SmileOutlined rotate={180} />}
            >
                {formated}
            </Tag>
        );
};
