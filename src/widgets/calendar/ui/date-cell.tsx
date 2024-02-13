import type { Dayjs } from "dayjs";
import { useMemo } from "react";
import { Badge } from "antd";

import { useDateTime } from "shared/datetime/use-date-time";
import { useTasks } from "entities/tasks/use-tasks";
import { useBoard } from "entities/board/use-board";

const eventsStyle = {
    margin: 0,
    padding: 0,
    listStyle: "none",
};

const styleBadgeStatus = {
    width: "100%",
    overflow: "hidden",
    fontSize: 12,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
};

export const DateCell: React.FC<{ date: Dayjs }> = ({ date }) => {
    const datetime = useDateTime();
    const { isNotPassedTask } = useBoard();
    const { tasks } = useTasks();
    const listData = useMemo(() => {
        return tasks.filter(
            (task) =>
                isNotPassedTask(task) &&
                date.isSame(datetime(task.deadlineAt ?? null), "day")
        );
    }, [tasks, isNotPassedTask, date, datetime]);

    return (
        <ul style={eventsStyle}>
            {listData.map((item) => (
                <li key={item.id}>
                    <Badge
                        status="error"
                        text={item.title}
                        style={styleBadgeStatus}
                    />
                </li>
            ))}
        </ul>
    );
};
