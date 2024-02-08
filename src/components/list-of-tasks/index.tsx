import { List, theme } from "antd";
import { useTasks } from "features/tasks/useTasks";
import { Status } from "components/status";

export const ListOfTasks = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const { tasks, isLoading } = useTasks();

    return (
        <List
            size="large"
            loading={isLoading}
            style={{
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
            }}
            dataSource={tasks}
            renderItem={(task) => (
                <List.Item>
                    <List.Item.Meta
                        title={<a href={`/task/${task.id}`}>{task.title}</a>}
                        description={task.description}
                    />
                    <Status statusId={task.statusId} />
                </List.Item>
            )}
        />
    );
};
