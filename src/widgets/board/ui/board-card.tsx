import { Link } from "react-router-dom";
import { Card, Divider } from "antd";
import { EyeOutlined } from "@ant-design/icons";

import type { Task } from "entities/tasks/types";
import { useBoard } from "entities/board/use-board";
import { DeadlineTag } from "features/deadline-tag";
import { UpdatedAt } from "features/updated-at";

export const BoardCard: React.FC<Task> = (task) => {
    const { id, title, description, updatedAt, deadlineAt } = task;
    const { isNotPassedTask } = useBoard();
    const isNotPassed = isNotPassedTask(task);
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
