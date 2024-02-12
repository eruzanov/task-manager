import { Row, Col } from "antd";

import { useBoardStatuses } from "features/statuses/use-board-statuses";
import { ColumnTitle } from "./column-title";
import { TasksByStatus } from "./tasks-by-status";

export const Board = () => {
    const { boardStatuses } = useBoardStatuses();

    return (
        <Row gutter={[16, 16]}>
            {boardStatuses.map((status) => (
                <Col span={6} key={status.id}>
                    <ColumnTitle statusId={status.id} />
                    <TasksByStatus statusId={status.id} />
                </Col>
            ))}
        </Row>
    );
};
