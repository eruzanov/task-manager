import { Row, Col } from "antd";

import { useBoard } from "features/board/use-board";
import { ColumnTitle } from "./column-title";
import { TasksByStatus } from "./tasks-by-status";

export const Board = () => {
    const { boardStatuses } = useBoard();

    return (
        <Row wrap={false} style={{ overflow: 'auto', padding: '0 16px' }}>
            {boardStatuses.map((status) => (
                <Col span={6} key={status.id} style={{ padding: "0 8px" }}>
                    <ColumnTitle statusId={status.id} />
                    <TasksByStatus statusId={status.id} />
                </Col>
            ))}
        </Row>
    );
};
