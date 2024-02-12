import { Link } from "react-router-dom";
import { Card, Divider } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";

import type { Task } from "features/tasks/types";
import { useDateTime } from "features/datetime/use-date-time";
import { DEFAULT_DATE_FORMAT } from "features/datetime/constants";
import { DeadlineTag } from "./deadline-tag";
import "./board-card.css";

type BoardCardProps = Task;

export const BoardCard: React.FC<BoardCardProps> = ({
    id,
    title,
    description,
    updatedAt,
    deadlineAt,
    statusId,
}) => {
    const datetime = useDateTime();
    const isNotPassed = statusId !== "5f33" && statusId !== "73d5" // closed and done

    return (
        <Card title={title}>
            {description && (
                <div className="board-card__description">{description}</div>
            )}
            {deadlineAt && isNotPassed && (
                <>
                    <DeadlineTag date={deadlineAt} />
                    <Divider type="vertical" />
                </>
            )}
            {updatedAt && (
                <>
                    <span className="board-card__updated">
                        <EditOutlined />{" "}
                        {datetime(updatedAt).format(DEFAULT_DATE_FORMAT)}
                    </span>
                    <Divider type="vertical" />
                </>
            )}
            <Link to={`/task/${id}`}>
                <EyeOutlined /> {id}
            </Link>
        </Card>
    );
};
