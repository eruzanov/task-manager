import { Row, Col, Affix } from "antd";

import { useTasks } from "features/tasks/use-tasks";
import { BacklogTasks } from "components/backlog-tasks";
import { BacklogFilter } from "components/backlog-filter";
import { useFilteredTasks } from "./use-filtered-tasks";

export const Backlog = () => {
    const { tasks, isLoading } = useTasks();
    const { onChangeFilter, filteredTasks } = useFilteredTasks(tasks);

    return (
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
    );
};
