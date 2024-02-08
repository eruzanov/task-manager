import { List } from "antd";
import { useTasks } from "../../features/tasks/useTasks";
import { Status } from "../status";

export const ListOfTasks = () => {
    const { tasks, isLoading } = useTasks();

    return (
        <List
            loading={isLoading}
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
