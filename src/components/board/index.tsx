import { Row, Col, Flex, Divider } from "antd";

import { useStatuses } from "features/statuses/useSatuses";
import { useTasks } from "features/tasks/useTasks";
import { BoardCard } from "components/board-card";
import { Status } from "components/status";

export const Board = () => {
    const { statuses } = useStatuses();
    const { tasks } = useTasks();

    return (
        <Row gutter={[16, 16]}>
            {statuses.map((status) => {
                const tasksByStatus = tasks.filter(
                    ({ statusId }) => statusId === status.id
                );
                return (
                    <Col span={6} key={status.id}>
                        <Divider orientation="left" orientationMargin="0">
                            <Status statusId={status.id} />
                        </Divider>
                        <Flex vertical gap="middle">
                            {tasksByStatus.map((task) => (
                                <BoardCard key={task.id} {...task} />
                            ))}
                        </Flex>
                    </Col>
                );
            })}
        </Row>
    );
};
