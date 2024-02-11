import { Link } from "react-router-dom";
import { List, theme } from "antd";

import type { Task } from "features/tasks/types";
import { StatusTag } from "components/status-tag";

interface BacklogTasks {
    isLoading: boolean;
    tasks: Task[];
}

export const BacklogTasks: React.FC<BacklogTasks> = ({ isLoading, tasks }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <List
            size="large"
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
