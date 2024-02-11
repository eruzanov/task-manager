import { useState } from "react";
import { Layout, Button, Divider, Modal } from "antd";

import { PageLayoutNavMenu } from "components/page-layout-nav-menu";
import { FormCreateTask } from "components/form-create-task";

export const PageLayoutHeader = () => {
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
            <PageLayoutNavMenu />
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
                <FormCreateTask onSuccess={handleCancel} />
            </Modal>
        </Layout.Header>
    );
};
