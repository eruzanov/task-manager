import { Card, Typography, Space } from "antd";
import { useParams } from "react-router-dom";

import { EditTask } from "widgets/edit-task";

const styleTitle = { marginTop: 0 };

export const Task = () => {
    const { taskId } = useParams() as { taskId: string };

    return (
        <div style={{ margin: 24 }}>
            <Card>
                <Space>
                    <Typography.Title level={3} style={styleTitle}>
                        Edit task:
                    </Typography.Title>
                    <Typography.Title level={3} type="secondary" style={styleTitle}>
                        {taskId}
                    </Typography.Title>
                </Space>
                <EditTask id={taskId} />
            </Card>
        </div>
    );
};
