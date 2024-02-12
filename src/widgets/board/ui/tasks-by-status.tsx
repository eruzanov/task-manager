import { Flex } from "antd";

import { useTasksByStatus } from "entities/board/use-tasks-by-status";
import { BoardCard } from "widgets/board/ui/board-card";

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
