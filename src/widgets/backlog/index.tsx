import { Row, Col, Affix } from "antd";

import { useTasks } from "entities/tasks/use-tasks";
import { useFilteredTasks } from "features/backlog-filter/use-filtered-tasks";
import { Filter } from "./ui/filter";
import { Tasks } from "./ui/tasks";

export const Backlog = () => {
    const { tasks, isLoading } = useTasks();
    const { onChangeFilter, filteredTasks } = useFilteredTasks(tasks);

    return (
        <Row gutter={[16, 16]}>
            <Col flex="auto">
                <Tasks isLoading={isLoading} tasks={filteredTasks} />
            </Col>
            <Col span={6}>
                <Affix offsetTop={88}>
                    <Filter onChange={onChangeFilter} />
                </Affix>
            </Col>
        </Row>
    );
};
