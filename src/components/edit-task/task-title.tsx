import { Typography, Space } from "antd";

const style = {
    marginTop: 0,
};

interface TaskTitleProps {
    taskId: string;
}

export const TaskTitle: React.FC<TaskTitleProps> = ({ taskId }) => {
    return (
        <Space>
            <Typography.Title level={3} style={style}>
                Edit task:
            </Typography.Title>
            <Typography.Title level={3} type="secondary" style={style}>
                {taskId}
            </Typography.Title>
        </Space>
    );
};
