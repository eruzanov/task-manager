import { Row, Col, Flex, Divider } from "antd";
import { useStatuses } from "features/statuses/useSatuses";
import { BoardCard } from "components/board-card";
import { Status } from "components/status";

export const Board = () => {
    const { statuses } = useStatuses();

    return (
        <Row gutter={[16, 16]}>
            {statuses.map((status) => {
                const count = Array.from(
                    Array(Math.round(Math.random() * 10)).keys()
                );
                return (
                    <Col flex="auto">
                        <Status statusId={status.id} />
                        <Divider />
                        <Flex vertical gap="middle">
                            {count.map(() => (
                                <BoardCard />
                            ))}
                        </Flex>
                    </Col>
                );
            })}
        </Row>
    );
};
