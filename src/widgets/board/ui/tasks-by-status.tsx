import { Flex } from "antd";

import { useTasksByStatus } from "../use-tasks-by-status";
import { BoardCard } from "./board-card";

interface TasksByStatusProps {
    statusId: string;
}

export const TasksByStatus: React.FC<TasksByStatusProps> = ({ statusId }) => {
    const tasksByStatus = useTasksByStatus(statusId);

    return (
        <Flex vertical gap="middle">
            {tasksByStatus.map((task) => (
                <BoardCard key={task.id} {...task} />
            ))}
        </Flex>
    );
};
