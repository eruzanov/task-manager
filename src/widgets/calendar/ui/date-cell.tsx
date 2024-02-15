import { Badge } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useMemo } from "react";

import { useBoard } from "@/entities/board/use-board";
import { useTasks } from "@/entities/tasks/use-tasks";

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
    const { isNotPassedTask } = useBoard();
    const { tasks } = useTasks();
    const listData = useMemo(() => {
        return tasks.filter(
            (task) =>
                isNotPassedTask(task) &&
                date.isSame(dayjs(task.deadlineAt ?? null), "day")
        );
    }, [tasks, isNotPassedTask, date]);

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
