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
                const cards = tasks.filter(
                    ({ statusId }) => statusId === status.id
                );
                return (
                    <Col span={6}>
                        <Status statusId={status.id} />
                        <Divider />
                        <Flex vertical gap="middle">
                            {cards.map(({ id, title, description }) => (
                                <BoardCard
                                    id={id}
                                    title={title}
                                    content={description}
                                />
                            ))}
                        </Flex>
                    </Col>
                );
            })}
        </Row>
    );
};
