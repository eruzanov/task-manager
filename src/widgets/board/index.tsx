import { Row, Col } from "antd";

import { useBoard } from "@/entities/board/use-board";
import { ColumnTitle } from "./ui/column-title";
import { TasksByStatus } from "./ui/tasks-by-status";

export const Board = () => {
    const { COLORS, boardStatuses } = useBoard();

    return (
        <Row wrap={false} style={{ overflow: 'auto', padding: '0 16px' }}>
            {boardStatuses.map((status) => (
                <Col span={6} key={status.id} style={{ padding: "0 8px" }}>
                    <ColumnTitle color={COLORS[status.id]} title={status.title} />
                    <TasksByStatus statusId={status.id} />
                </Col>
            ))}
        </Row>
    );
};
