import { useMemo } from "react";
import { Row, Col, Flex, Divider } from "antd";

import { useStatuses } from "features/statuses/useSatuses";
import { useTasks } from "features/tasks/useTasks";
import { BoardCard } from "components/board-card";
import { StatusTag } from "components/status-tag";

export const Board = () => {
    const { statuses } = useStatuses();
    const { tasks } = useTasks();
    // show everything except closed status
    const displayedStatuses = useMemo(
        () => statuses.filter(({ id }) => id !== "5f33"), // id of closed status
        [statuses]
    );

    return (
        <Row gutter={[16, 16]}>
            {displayedStatuses.map((status) => {
                const tasksByStatus = tasks.filter(
                    ({ statusId }) => statusId === status.id
                );
                return (
                    <Col span={6} key={status.id}>
                        <Divider orientation="left" orientationMargin="0">
                            <StatusTag statusId={status.id} />
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
