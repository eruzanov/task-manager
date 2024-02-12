import { Flex } from "antd";

import { useTasksByStatus } from "features/board/use-tasks-by-status";
import { BoardCard } from "components/board-card";

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
