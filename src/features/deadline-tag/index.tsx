import { Tag } from "antd";
import dayjs from "dayjs";
import {
    SmileOutlined,
    ClockCircleOutlined,
    ExclamationCircleOutlined,
} from "@ant-design/icons";

import { DEFAULT_DATE_FORMAT } from "shared/datetime";

interface DeadlineTagProps {
    date: number;
}

export const DeadlineTag: React.FC<DeadlineTagProps> = ({ date }) => {
    const formated = dayjs(date).format(DEFAULT_DATE_FORMAT);
    const isBeforeWeek = dayjs().isBefore(dayjs(date), "week");
    const lessThanWeek = dayjs().isSame(dayjs(date), "week");
    const isSameDay = dayjs().isSame(dayjs(date), "day");

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
