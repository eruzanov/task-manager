import { Link } from "react-router-dom";
import { Card, Divider } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";

import type { Task } from "features/tasks/types";
import { useDateTime } from "features/datetime/useDateTime";
import { DEFAULT_DATE_FORMAT } from "features/datetime/constants";
import "./board-card.css";

type BoardCardProps = Task;

export const BoardCard: React.FC<BoardCardProps> = ({
    id,
    title,
    description,
    updatedAt,
}) => {
    const datetime = useDateTime();

    return (
        <Card title={title}>
            {description && (
                <div className="board-card__description">{description}</div>
            )}
            {updatedAt && (
                <span className="board-card__updated">
                    <EditOutlined />{" "}
                    {datetime(updatedAt).format(DEFAULT_DATE_FORMAT)}
                </span>
            )}
            <Divider type="vertical" />
            <Link to={`/task/${id}`}>
                <EyeOutlined /> {id}
            </Link>
        </Card>
    );
};
