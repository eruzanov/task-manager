import { Link } from "react-router-dom";
import { Card, Divider } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

import type { Task } from "features/tasks/types";
import "./board-card.css";

const DATE_FORMAT = "DD MMM YYYY";

type BoardCardProps = Task;

export const BoardCard: React.FC<BoardCardProps> = ({
    id,
    title,
    description,
    updatedAt,
}) => (
    <Card title={title}>
        {description && (
            <div className="board-card__description">{description}</div>
        )}
        {updatedAt && <span className="board-card__updated">
            <EditOutlined /> {dayjs(updatedAt).format(DATE_FORMAT)}
        </span>}
        <Divider type="vertical" />
        <Link to={`/task/${id}`}>
            <EyeOutlined /> {id}
        </Link>
    </Card>
);
