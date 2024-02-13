import { Row, Col, Affix } from "antd";

import { useTasks } from "entities/tasks/use-tasks";
import { useFilteredTasks } from "features/backlog-filter/use-filtered-tasks";
import { BacklogTasks } from "widgets/backlog-tasks";
import { BacklogFilter } from "widgets/backlog-filter";

export const Backlog = () => {
    const { tasks, isLoading } = useTasks();
    const { onChangeFilter, filteredTasks } = useFilteredTasks(tasks);

    return (
        <div style={{ margin: 24 }}>
            <Row gutter={[16, 16]}>
                <Col flex="auto">
                    <BacklogTasks isLoading={isLoading} tasks={filteredTasks} />
                </Col>
                <Col span={6}>
                    <Affix offsetTop={88}>
                        <BacklogFilter onChange={onChangeFilter} />
                    </Affix>
                </Col>
            </Row>
        </div>
    );
};
