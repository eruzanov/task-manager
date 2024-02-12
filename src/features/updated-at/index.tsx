import { EditOutlined } from "@ant-design/icons";
import { theme } from "antd";

import { useDateTime } from "shared/datetime/use-date-time";
import { DEFAULT_DATE_FORMAT } from "shared/datetime/constants";

interface UpdatedAtProps {
    date: number;
}

export const UpdatedAt: React.FC<UpdatedAtProps> = ({ date }) => {
    const {
        token: { colorTextTertiary },
    } = theme.useToken();
    const datetime = useDateTime();

    return (
        <span style={{ color: colorTextTertiary }}>
            <EditOutlined /> {datetime(date).format(DEFAULT_DATE_FORMAT)}
        </span>
    );
};
