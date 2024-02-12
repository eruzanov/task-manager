import { Link } from "react-router-dom";
import { Card, Divider } from "antd";
import { EyeOutlined } from "@ant-design/icons";

import type { Task } from "features/tasks/types";
import { isNotPassedTask } from "features/board/is-not-passed-task";
import { DeadlineTag } from "./deadline-tag";
import { UpdatedAt } from "./updated-at";

type BoardCardProps = Task;

export const BoardCard: React.FC<BoardCardProps> = ({
    id,
    title,
    description,
    updatedAt,
    deadlineAt,
    statusId,
}) => {
    const isNotPassed = isNotPassedTask(statusId);
    const showDeadline = deadlineAt && isNotPassed;

    return (
        <Card title={title}>
            {description && (
                <div style={{ marginBottom: 8 }}>{description}</div>
            )}
            {showDeadline && (
                <>
                    <DeadlineTag date={deadlineAt} />
                    <Divider type="vertical" />
                </>
            )}
            {updatedAt && (
                <>
                    <UpdatedAt date={updatedAt} />
                    <Divider type="vertical" />
                </>
            )}
            <Link to={`/task/${id}`}>
                <EyeOutlined /> {id}
            </Link>
        </Card>
    );
};
