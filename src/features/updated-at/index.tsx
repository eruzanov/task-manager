import { EditOutlined } from "@ant-design/icons";
import { theme } from "antd";
import dayjs from "dayjs";

import { DEFAULT_DATE_FORMAT } from "shared/datetime";

interface UpdatedAtProps {
    date: number;
}

export const UpdatedAt: React.FC<UpdatedAtProps> = ({ date }) => {
    const {
        token: { colorTextTertiary },
    } = theme.useToken();

    return (
        <span style={{ color: colorTextTertiary }}>
            <EditOutlined /> {dayjs(date).format(DEFAULT_DATE_FORMAT)}
        </span>
    );
};
