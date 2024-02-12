import { useState } from "react";
import { Layout, Button, Divider, Modal } from "antd";

import { AppNavMenu } from "components/app-nav-menu";
import { CreateTask } from "components/create-task";

export const AppHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    return (
        <Layout.Header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                width: "100%",
            }}
        >
            <AppNavMenu />
            <Divider type="vertical" />
            <Button size="large" type="primary" onClick={showModal}>
                Create task
            </Button>
            <Modal
                title="Create task"
                open={isModalOpen}
                onCancel={handleCancel}
                width="40%"
                footer={null}
                destroyOnClose
            >
                <CreateTask onSuccess={handleCancel} />
            </Modal>
        </Layout.Header>
    );
};
