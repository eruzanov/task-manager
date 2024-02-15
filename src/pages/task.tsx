import { Card, Typography, Space } from "antd";
import { useParams } from "react-router-dom";

import { EditTask } from "@/widgets/edit-task";

const styleTitle = { marginTop: 0 };

export const Task = () => {
    const { taskId } = useParams();

    return (
        <Card style={{ margin: 24 }}>
            <Space>
                <Typography.Title level={3} style={styleTitle}>
                    Edit task:
                </Typography.Title>
                <Typography.Title level={3} type="secondary" style={styleTitle}>
                    {taskId}
                </Typography.Title>
            </Space>
            <EditTask id={taskId!} />
        </Card>
    );
};
