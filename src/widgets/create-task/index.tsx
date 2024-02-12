import { useState } from "react";
import { Button, Modal } from "antd";

import { CreateTaskForm } from "./create-task-form";

export const CreateTask = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    return (
        <>
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
                <CreateTaskForm onSuccess={handleCancel} />
            </Modal>
        </>
    );
};
