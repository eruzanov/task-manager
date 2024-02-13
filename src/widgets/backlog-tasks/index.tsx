import { Link } from "react-router-dom";
import { List, theme } from "antd";

import type { Task as TaskType } from "entities/tasks/types";
import { StatusTag } from "./status-tag";

interface BacklogTasksProps {
    isLoading: boolean;
    tasks: TaskType[];
}

export const BacklogTasks: React.FC<BacklogTasksProps> = ({
    isLoading,
    tasks,
}) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <List
            loading={isLoading}
            style={{ background: colorBgContainer }}
            bordered
            dataSource={tasks}
            renderItem={(task) => (
                <List.Item>
                    <List.Item.Meta
                        title={
                            <Link to={`/task/${task.id}`}>{task.title}</Link>
                        }
                        description={task.description}
                    />
                    <StatusTag statusId={task.statusId} />
                </List.Item>
            )}
        />
    );
};
