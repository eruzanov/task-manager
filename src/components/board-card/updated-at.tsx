import { EditOutlined } from "@ant-design/icons";
import { theme } from "antd";

import { useDateTime } from "features/datetime/use-date-time";
import { DEFAULT_DATE_FORMAT } from "features/datetime/constants";

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
